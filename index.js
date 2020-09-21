const express = require('express');
const app = express();

app.set('view engine', 'ejs'); // Estamos informando ao express que o ejs será responsável pelas views.

app.get('/', (request, response)=>{
  return response.render('index');
});

app.listen(3333, ()=>{
  console.log('App rodando ');
  
})
