const express = require('express');
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "public")));

app.listen(process.env.PORT || 3000, ()=>{
    console.log('Servidor funcionando');
});

/*process.env.PORT || */

app.get('/', (req,res)=>{
    res.sendFile(path.resolve((__dirname, '/views/home.html')));
});

app.get('/login', (req,res)=>{
    res.sendFile(path.resolve((__dirname, '/views/login.html')));
});

app.get('/register', (req,res)=>{
    res.sendFile(path.resolve((__dirname, '/views/register.html')));
});


//web: node app.js esto va en procfile

