const connect = require("./client")
const setupInput = require("./input")

console.log("Connecting ...");
let connection = connect();
connect();
setupInput(connection);

