const express = require('express');
const app = express();
app.use(express.static('public'));

app.listen(process.env.PORT || 3000, ()=>{
    console.log('Servidor funcionando');
});

/*process.env.PORT || */

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});


//web: node app.js esto va en procfile

