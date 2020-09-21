const express = require('express');
const app = express();

app.set('view engine', 'ejs'); // Estamos informando ao express que o ejs será responsável pelas views.

app.get('/:nome/:lang', (request, response)=>{
    const { nome , lang} = request.params;
  return response.render('index', {
    nome, lang
  });
});

app.listen(3333, ()=>{
  console.log('App rodando ');
  
})
