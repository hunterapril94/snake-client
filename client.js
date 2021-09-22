const net = require("net");
const {snakeHost, snakePort} = require('./constants')

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: snakeHost,
    port: snakePort// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on("connect", () => {
    console.log("Successfully connected.")
    conn.write("Name: AHL")
    

  })

  conn.on("data", (data) => {
    console.log(data)
  })

  return conn;
};

module.exports = connect;