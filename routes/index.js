const db = require('../config')

module.exports = app => {
  app.get('/', (req, res) => {
    db.query('SELECT * FROM burgers WHERE isDevoured=false', (e, burgers) => {
      if (e) throw e
      res.render('index', { burgers })
    })
  })

  // do another GET request for devoured burgers

  app.post('/burgers', (req, res) => {
    db.query('INSERT INTO burgers SET ?', req.body, (e) => {
      if (e) throw e
      res.sendStatus(200)
    })
  })

  app.put('/burgers/:id'), (req, res) => {
    db.query(`UPDATE burgers SET isDevoured=true WHERE ?`, { id: req.params.id }(e => {
      if (e) throw e
      res.sendStatus(200)
    })
    )
  }
}
