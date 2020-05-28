const express = require('express');
const app = express();

app.use(express.static('public'));

const facts = require('./public/index');
const randomize = require('./public/randomizer');


app.get('/', (req, res)=>{
    res.sendFile('index.html');
})

app.get('/facts', (req, res)=>{
    res.send(`Here's a random fact: ${randomize(facts)}`);
})


const port = process.env.PORT || 8000;

app.listen(port, ()=>{console.log(`Listening on port: ${port}`)});