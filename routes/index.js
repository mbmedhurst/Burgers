const db = require('../config')

module.exports = app => {
  app.get('/', (req, res) => {
    db.query('SELECT * FROM burgers WHERE isDevoured=false', (e, burgers) => {
      if (e) throw e
      res.render('index', {burgers})
    })
  })

  app.post('/burgers', (req, res) => {
    db.query('INSERT INTO burgers SET ?', req.body, (e) => {
      if (e) throw e
      res.sendStatus(200)
    })
  })

  app.put('/users/:id'), (req, res) => {
    db.query(`UPDATE burgers SET isDevoured to false WHERE id=${id}`, (e) => {
      if (e) throw e
      res.render('index', {burgers})
    })
  }
}
