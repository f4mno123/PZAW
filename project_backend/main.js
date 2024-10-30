const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const router = express.Router();
router.get('/gettest', (req, res) => {
  res.status(200);
  res.send('Get test');
})

router.post('/posttest', (req, res) => {
  res.status(200);
  res.send('Post test');
});

router.get('/', (req, res) => {
  res.status(200);
  res.send('<div style="text-align: center; margin-top: 20%;"> <h1> Welcome to the API </h1> </div>');
});


router.get('/json', (req, res) => {
  const data = {
    message: 'Hello World!',
    author: 'Me'
  };
  res.status(200);
  res.json(data);
});

app.use(router);


app.listen(8080);
