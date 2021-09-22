let connection;
const setupInput = function (conn) {
  const stdin = process.stdin;
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
  };
  stdin.on("data", handleUserInput);
  return stdin;
};


module.exports = setupInput;