const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());

let globalData = []



const router = express.Router();
router.get('/gettest', (req, res) => {
  res.status(200);
  res.send('Get test');
});

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
    message: 'Hello Slay!',
    author: 'Me'
  };
  res.status(200);
  res.json(data);
});


router.post('/task02/data', (req, res) => {
  const { name, surname, age, gender, gay } = req.body;
  globalData.push({name,surname,age,gender,gay})
  console.log(`Name: ${name}, Surname: ${surname}, Age: ${age}, Gender: ${gender}, Gay: ${gay}`);
  res.send('Form data received');
});

router.get('/task02/data', (req, res) => {
  res.status(200).json(globalData);
});

app.use(router);

const origins = [
  "localhost:3000",
]

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", origins);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(8080);
