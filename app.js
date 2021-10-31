var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')
const mongoose = require('mongoose');


var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
var userRoute = require('./routes/userRoutes');

var app = express();

//connecting to mongo atlas
const url = `mongodb+srv://shulaefrat:shef1234@cluster0.fwpkh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const connectionParams={
  useNewUrlParser: true,
  // useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
  .then( () => {
      console.log('Connected to database ')
  })
  .catch( (err) => {
      console.error(`Error connecting to the database. \n${err}`);
  })


  const MyExample = require('./models/example');

  // const newEx = MyExample();
  // newEx.save();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', (req,res)=> {console.log("ggg"); res.send("hhh")});

app.use('/user', userRoute);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
