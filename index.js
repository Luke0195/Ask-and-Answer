const express = require('express');
const app = express();
const bodyParser = require('body-parser');  // é uma extensão que nós permite capturar as informações do formulario para javascript
const connection = require('./database/database');
const perguntaMode = require('./database/Pergunta');

connection
.authenticate()
.then(()=>{
  console.log('Conexão feita com o banco de dados');
})
.catch((msgErro)=>{
  console.log(msgErro)
});

app.set('view engine', 'ejs'); // Estamos informando ao express que o ejs será responsável pelas views.n
app.use(express.static('public')); // Isso vai me permitir trabalhar com arquivos estaticos no express(os arquivos estaticos são arquivos que o back-end não ira processar);
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', (request, response)=>{
  return response.render('index');
});

app.get('/askquestion', (request,response)=>{
 
  console.log(obj);
  return response.render('askQuestion');
});

app.post('/savequestion', (request,response)=>{
  const titulo = request.body.titulo;
  const descricao = request.body.descricao;
  const obj  ={
    titulo,
    descricao
  }
  console.log(obj);
  
});

app.listen(3333, ()=>{
  console.log('App rodando ');
  
})
