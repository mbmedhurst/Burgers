const { createConnection } = require('mysql2')

module.exports = createConnection({
  host: 'localhost',
  port: null,
  user: 'root',
  password: 'root1234',
  database: 'burgers_db'
})
