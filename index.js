const express = require('express');
const app = express();

app.set('view engine', 'ejs'); // Estamos informando ao express que o ejs será responsável pelas views.

app.get('/:nome/:lang', (request, response)=>{
    const { nome , lang} = request.params;
    const exibirMsg = false;
    const produtos =[
      {nome: 'doritos', preco:4.20},
      {nome: 'coca-cola', preco: 8.00},
      {nome:  'play5', preco:5.000}

    ]

  return response.render('index', {
    nome, lang, 
    msg: exibirMsg,
    produtos
  });
});

app.listen(3333, ()=>{
  console.log('App rodando ');
  
})
