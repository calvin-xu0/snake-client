// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin
const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  connection = conn;

  stdin.on("data", handleUserInput);
  return stdin;
};

let intervalId = 0;
const handleUserInput = key => {
  clearInterval(intervalId);
  if (key === '\u0003') {
    process.exit();
  } else if (key === "w") {
    intervalId = setInterval( () => connection.write("Move: up"), 50);
  } else if (key === "a") {
    intervalId = setInterval( () => connection.write("Move: left"), 50);
  } else if (key === "x") {
    intervalId = setInterval( () => connection.write("Move: down"), 50);
  } else if (key === "d") {
    intervalId = setInterval( () => connection.write("Move: right"), 50);
  } else if (key === "q") {
    intervalId = setInterval( () => {
      setTimeout( () => connection.write("Move: left"), 0);
      setTimeout( () => connection.write("Move: up"), 50);
      // connection.write("Move: left");
    }, 100);    
  } else if (key === "e") {
    intervalId = setInterval( () => {
      setTimeout( () => connection.write("Move: up"), 50);
      connection.write("Move: right");
    }, 100);    
  } else if (key === "z") {
    intervalId = setInterval( () => {
      setTimeout( () => connection.write("Move: down"), 50);
      connection.write("Move: left");
    }, 100);    
  } else if (key === "c") {
    intervalId = setInterval( () => {
      setTimeout( () => connection.write("Move: right"), 50);
      connection.write("Move: down");
    }, 100);
  } else if (key === "1") {
    // Taunt 1
    connection.write("Say: \nHa ha");
  } else if (key === "2") {
    // Taunt 2
    connection.write("Say: \n");
  } else if (key === "3") {
    // Taunt 3
    connection.write("Say: \n");
  }
};

module.exports = {setupInput};