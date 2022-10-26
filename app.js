var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')
const mongoose = require('mongoose');
var app = express();

var sizeOptionsModel = require('./models/sizeOptionsModel');
var paperTypesModel = require('./models/paperTypesModel');
var formatTypesOptionsModel=require('./models/formatTypesOptionsModel');
var colorOptionsModel=require('./models/colorOptionsModel');
var bindingTypesOptionsModel=require('./models/bindingTypesOptionsModel');

var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
var userRoute = require('./routes/userRoutes');
var bindingTypesRoute = require('./routes/bindingTypesOptionsRoutes');
var bookTypesRoute = require('./routes/bookTypesOptionsRoutes');
var colorOptionsRoute = require('./routes/colorOptionsRoutes');
var formatTypesRoute = require('./routes/formatTypesOptionsRoutes');
var paperTypesRoute = require('./routes/paperTypesRoutes');
var sizeOptionsRoute = require('./routes/sizeOptionsRoutes');
var orderRoute = require('./routes/orderRoutes');
var bookRoute = require('./routes/bookRoutes');

//connecting to mongo atlas
const url = `mongodb+srv://shulaefrat:shef1234@cluster0.fwpkh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const connectionParams = {
  useNewUrlParser: true,
  // useUnifiedTopology: true 
}
mongoose.connect(url, connectionParams)
  .then(() => {
    console.log('Connected to database ')
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  })


  // const MyExample = require('./models/example');

  // const newEx = MyExample();
  // newEx.save();

//insert data to tables
  const newEx = sizeOptionsModel();
  // newEx.name="10*14";
  // newEx.name="11*15";
  //   newEx.name="21*28";
    // newEx.name="12*17";
    // newEx.name="17.5*25.5";
    // newEx.name="16.5*24.5";
    // newEx.name="15*23";
    // newEx.name="14*21";
    // newEx.name="24*35";
    // newEx.name="22*31";
  
  //  newEx.save();
  
   const newEx1 = paperTypesModel();
  // newEx1.name="נטול עץ לבן 70 גרם";
  // newEx1.name="נטול עץ לבן 80 גרם";
  // newEx1.name="נטול עץ לבן 90 גרם";
  // newEx1.name="נטול עץ לבן 110 גרם";
  // newEx1.name="נטול עץ קרם 70 גרם";
  // newEx1.name="נטול עץ קרם 80 גרם";
  // newEx1.name="נטול עץ קרם 90 גרם";
  // newEx1.name="נטול עץ קרם 110 גרם";
  // newEx1.name="נטול עץ קרם 60 מיוחד";
  // newEx1.name="כרומו 64 גרם";
  // newEx1.name="כרומו 90 גרם";
  // newEx1.name="כרומו 105 גרם";
  // newEx1.name="כרומו 115 גרם";
  // newEx1.name="כרומו 130 גרם";
  // newEx1.name="בייבל לבן 60";
  // newEx1.name="בייבל לבן 50";
  // newEx1.name="בייבל קרם 60";
  // newEx1.name="בייבל קרם 50";
  // newEx1.save();
  
  
   const newEx2=formatTypesOptionsModel();
  // newEx2.name="רגיל";
  // newEx2.name="אלבומי";
  // newEx2.save();
  
  
   const newEx3=colorOptionsModel();
  // newEx3.name="שחור לבן";
  // newEx3.name="צבעוני (פרוצס)";
  // newEx3.save();
  
  
  const newEx4=bindingTypesOptionsModel();
  // newEx4.name="כריכה קשה";
  // newEx4.name="כריכה רכה";
  // newEx4.name="סיכות";
  // newEx4.save();
  
  const newEx5 = bindingTypesOptionsModel();
  // newEx5.bookType = "כריכה קשה";
  // newEx5.name ="סקאי";
  // newEx5.name ="למינציה";
  // newEx5.bookType = "כריכה רכה";
  // newEx5.name ="צבעוני, למינציה מט";
  // newEx5.name ="צבעוני, למינציה מבריק";
  // newEx5.name ="שחור-לבן, למינציה מט";
  // newEx5.name ="שחור-לבן, למינציה מבריק";
  // newEx5.save();

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

//routing
// app.use('/users', usersRouter);
app.use('/user', userRoute);
app.use('/bindingtypes', bindingTypesRoute);
app.use('/booktypes', bookTypesRoute);
app.use('/coloroptions', colorOptionsRoute);
app.use('/formattypes', formatTypesRoute);
app.use('/papertypes', paperTypesRoute);
app.use('/sizeoptions', sizeOptionsRoute);
app.use('/order', orderRoute);
app.use('/book', bookRoute);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
