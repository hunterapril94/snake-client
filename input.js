let connection;
const stdin = require('./constants').stdin
const setupInput = function (conn) {
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  const handleUserInput = function (key) {
    // your code here
  
    if (key === '\u0003') {
      process.exit();
    }
  
    if (key === "w") {
      conn.write("Move: up")
    }
  
    if (key === "d") {
      conn.write("Move: right")
    }
    
    if (key === "s") {
      conn.write("Move: down")
    }
  
    if (key === "a") {
      conn.write("Move: left")
    }

    if (key === "l") {
      conn.write("Say: I'm here!")
    }
    if (key === "b") {
      conn.write("ssssss")
    }
  };
  stdin.on("data", handleUserInput);
  return stdin;
};


module.exports = setupInput;