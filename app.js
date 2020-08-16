const express = require('express');
const morgan = require('morgan')
const path = require('path');

const bodyParser = require('body-parser');
const expressHandlebars = require('express-handlebars');
const PORT = process.env.PORT||5000





const app = express();
app.use(morgan('dev'));

// ---------------------------------------------------------------------------------------------------------------------------------------

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', expressHandlebars({ defaultLayout: 'layout' }));
app.set('view engine', 'handlebars');
  

// ---------------------------------------------------------------------------------------------------------------------------------------

//Middlewares 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));





// Routes



app.use('/', require('./routes/index'));


//starting server
app.listen(PORT,()=>{
  console.log(`server listening on ${PORT}`)
})