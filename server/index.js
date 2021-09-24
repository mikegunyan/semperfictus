const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/messages/:userid/:mailbox', (req, res) => {
  const { userid, mailbox } = req.params;
  db.query('SELECT id, message, box, sender, isread FROM messages where usersid = (?) && box = (?) ORDER BY id DESC', [userid, mailbox], (err, results) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.send(results);
    }
  });
})

// app.get('/user/:id', (req, res) => {
//   const { id } = req.params;
//   db.query('SELECT id, message, box FROM messages where usersid = (?) && box = (?) ORDER BY id DESC', [userid, mailbox], (err, results) => {
//     if (err) {
//       console.log(err);
//       res.sendStatus(500);
//     } else {
//       res.send(results);
//     }
//   });
// })

// app.post('/people', (req, res) => {
//   const { person } = req.body;
//   db.query(`INSERT INTO people (person) VALUES (?)`, [person], (err, results) => {
//     if (err) {
//       console.log(err);
//       res.sendStatus(500);
//     } else {
//       res.sendStatus(201);
//     }
//   });
// })

app.put('/messages/:id', (req, res) => {
  const { id } = req.params;
  const isread = req.body.isread === 1 ? 0 : 1;
  db.query('UPDATE messages SET isread = ? WHERE id = ?', [isread, id], (err, results) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });
})

// app.delete('/people', (req, res) => {
//   const { id } = req.body;
//   db.query('DELETE FROM people WHERE id = ?', [id], (err, results) => {
//     if (err) {
//       console.log(err);
//       res.sendStatus(500);
//     } else {
//       res.sendStatus(201);
//     }
//   });
// })

// app.options('/people', (req, res) => {
//   db.query('DELETE FROM people', (err, results) => {
//     if (err) {
//       console.log(err);
//       res.sendStatus(500);
//     } else {
//       res.sendStatus(201);
//     }
//   });
// })

app.listen(port, () => {
  console.log(`Listening on port:${port}...`)
});
