const db = require('../config')

module.exports = app => {
  // GET request for all burgers
  app.get('/', (req, res) => {
    db.query('SELECT * FROM burgers', (e, Burgers) => {
      if (e) throw e
      res.render('index', { Burgers })
    })
  })

  // POST request for new burgers
  app.post('/burgers', (req, res) => {
    db.query('INSERT INTO burgers SET ?', req.body, (e) => {
      if (e) throw e
      res.sendStatus(200)
    })
  })

  // PUT request to change isDevoured status to TRUE
  app.put('/burgers/:id', (req, res) => {
    db.query(`UPDATE burgers SET isDevoured=true WHERE ?`, { id: req.params.id },(e => {
      if (e) throw e
      res.sendStatus(200)
    })
    )
  })
}
