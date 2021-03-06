const express = require('express');
const app = express();
const bodyParser = require('body-parser');  // é uma extensão que nós permite capturar as informações do formulario para javascript
const connection = require('./database/database');
const pergunta= require('./database/Pergunta');
const { response } = require('express');

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
   pergunta.findAll({raw:true, order:[['id', 'desc']]}).then(perguntas =>{ // Usamos o order para fazer a ordernação 
     response.render('index',{
       perguntas:perguntas
     })
   })
  });
 

app.get('/askquestion', (request,response)=>{
 
  return response.render('askQuestion');
});

app.get('/question/:id', (request, reponse)=>{
  const{ id } = request.params;
  pergunta.findOne({
    where: { id: id}
  }).then(pergunta =>{
     if(pergunta != undefined){
      reponse.render('question',{
        pergunta
      });
     }else{
      reponse.redirect('/');
     }
  })
});

app.post('/savequestion', (request,response)=>{
 const { titulo, descricao } = request.body 
  pergunta.create({// representa o método insert
    titulo,
    descricao
  }).then(()=>{
    response.redirect('/'); // redireciona para o index
  })
  
  
});

app.listen(3332, ()=>{
  console.log('App rodando ');
  
})
