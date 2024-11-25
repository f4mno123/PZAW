const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());

let globalData = []



const router = express.Router();
// router.get('/gettest', (req, res) => {
//   res.status(200);
//   res.send('Get test');
// });

// router.post('/posttest', (req, res) => {
//   res.status(200);
//   res.send('Post test');
// });

// router.get('/', (req, res) => {
//   res.status(200);
//   res.send('<div style="text-align: center; margin-top: 20%;"> <h1> Welcome to the API </h1> </div>');
// });

// router.get('/json', (req, res) => {
//   const data = {
//     message: 'Hello Slay!',
//     author: 'Me'
//   };
//   res.status(200);
//   res.json(data);
// });


// router.post('/task02/data', (req, res) => {
//   const { name, surname, age, gender, gay } = req.body;
//   globalData.push({name,surname,age,gender,gay})
//   console.log(`Name: ${name}, Surname: ${surname}, Age: ${age}, Gender: ${gender}, Gay: ${gay}`);
//   res.send('Form data received');
// });

// router.get('/task02/data', (req, res) => {
//   res.status(200).json(globalData);
// });

router.get('/pokemons', (req, res) => {
  const fs = require('fs');
  const data = fs.readFileSync('pokedex.json');
  const pokemon = JSON.parse(data);
  res.status(200);
  res.json(pokemon);
});

router.get('/pokemon/details/:id', (req, res) => {
  const fs = require('fs');
  const data = fs.readFileSync('pokedex.json');
  const pokemon = JSON.parse(data);
  const id = req.params.id;
  const poke = pokemon.find(p => p.id == id);
  if (poke) {
    res.status(200);
    res.json(poke.base);
  } else {
    res.status(404);
    res.send('Pokemon not found');
  }
});


router.get('/pokemon/types', (req, res) => {
  const fs = require('fs');
  const data = fs.readFileSync('types.json');
  const types = JSON.parse(data).map(t => t.english);
  
  res.status(200);
  res.json(types);
});

router.get('/pokemon/:id', (req, res) => {
  const fs = require('fs');
  const data = fs.readFileSync('pokedex.json');
  const pokemon = JSON.parse(data);
  const id = req.params.id;
  const poke = pokemon.find(p => p.id == id);
  if (poke) {
    res.status(200);
    res.json(poke);
  } else {
    res.status(404);
    res.send('Pokemon not found');
  }
});


router.get('/pokemon/image/:id', (req, res) => {
  let id = req.params.id;
  const fs = require('fs');
  const data = fs.readFileSync('pokedex.json');
  const pokemon = JSON.parse(data);
  const poke = pokemon.find(p => p.id == id);

  if (id >= 1 && id <= 9) {
    id = '00' + id;
  } else if (id >= 10 && id <= 99) {
    id = '0' + id;
  }

  if (poke) { 
    const img = fs.readFileSync(`images/${id}.png`, 'base64');
    res.status(200);
    res.send(img);
  } else {
    res.status(404);
    res.send('Pokemon not found');
  }

});

router.get('/pokemon', (req, res) => {
  const fs = require('fs');
  const path = require('path');

  try {
    const data = fs.readFileSync(path.join(__dirname, 'pokedex.json'), 'utf8');
    const pokemon = JSON.parse(data);

    const name = req.query.name?.toLowerCase();
    const types = req.query.type ? req.query.type.toLowerCase().split(',') : null;

    const result = pokemon.filter(p => {
      const nameMatch = name ? p.name.english.toLowerCase().includes(name) : true;
      const typeMatch = types
        ? types.every(type => p.type.map(t => t.toLowerCase()).includes(type)) 
        : true; 
      return nameMatch && typeMatch;
    });

    const resultWithImages = result.map(p => {
      let id = p.id;
      if (id >= 1 && id <= 9) {
        id = '00' + id;
      } else if (id >= 10 && id <= 99) {
        id = '0' + id;
      }

      try {
        const imgPath = path.join(__dirname, 'images', `${id}.png`);
        const img = fs.readFileSync(imgPath);
        p.imageBase64 = `data:image/png;base64,${img.toString('base64')}`;
      } catch (err) {
        console.error(`Error reading image for Pokémon ID ${id}:`, err);
        p.imageBase64 = null; 
      }

      return p;
    });

    if (resultWithImages.length > 0) {
      res.status(200).json(resultWithImages);
    } else {
      res.status(404).send('No Pokémon matched the criteria.');
    }
  } catch (err) {
    console.error("Error loading Pokémon data:", err);
    res.status(500).send('Internal Server Error');
  }
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
