const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  const {sayHello} = require('./services/sayHelloWorld');
  
  res.send(sayHello());
});

app.get('/lendoPlanilhas1', (req, res) => {
    console.log('req.params.categoria',req.params)
    const {lendoPlanilhas} = require('./services/lendoPlanilhas1');
    
    res.send(lendoPlanilhas('lendoPlanilhas'));
  });


app.get('/excelParaCsvTeste_Pasta', (req, res) => {
    const {excelParaCsvTeste_Pasta} = require('./services/excelParaCsvTeste_Pasta');
    
    res.send(excelParaCsvTeste_Pasta());
  });  

app.get('/lendoCsv_Pastas', (req, res) => {
    const {lendoCsv_Pastas} = require('./services/lendoCsv_Pastas');
    
    res.send(lendoCsv_Pastas());
  });    

module.exports = {
  app,
};