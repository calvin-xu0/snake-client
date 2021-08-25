const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "135.23.223.133", // IP address here,
    // host: "localhost",
    port: "50542" // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Connection established.");
    conn.write("Name: :^)"); // вас
    // conn.write("Move: up");
    // setInterval(() => conn.write("Move: right"), 50);
  });
  
  conn.on("data", (data) => {
    console.log(data);
  })

  return conn;
};

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function () {
  if (key === '\u0003') {
    process.exit();
  }
};


module.exports = {connect};