const db = require('../config')

module.exports = app => {
  // GET request for available burgers
  app.get('/', (req, res) => {
    db.query('SELECT * FROM burgers WHERE isDevoured=false', (e, newBurgers) => {
      if (e) throw e
      res.render('index', { newBurgers })
    })
  })

  // GET request for devoured burgers
  app.get('/', (req, res) => {
    db.query('SELECT * FROM burgers WHERE isDevoured=true', (e, devBurgers) => {
      if (e) throw e
      res.render('index', { devBurgers })
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
