const express = require('express');
const methodOverride = require('method-override');
const app = express();
const path = require('path');
var session = require('express-session');
const isLoggedIn = require('./src/middlewares/isLoggedin')


app.set('view engine', 'ejs'); 
app.set('views', './src/views');

app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(express.static(path.resolve('public'))); 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use( session({
    secret : 'text',
    name : 'sessionId',
   })
 );

const homeRouter = require('./src/routes/homeRouter');
const projectRouter = require('./src/routes/projectRouter')

app.use(isLoggedIn)

app.use(homeRouter);
app.use(projectRouter);

app.listen(3000, () => console.log('Rodando na porta 3000'))