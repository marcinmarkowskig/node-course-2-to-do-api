var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//połączenie z bazą danych
mongoose.connect(process.env.MONGODB_URI);

module.exports = {
  mongoose
}
//HEROKU https://desolate-peak-46880.herokuapp.com/todos/
