var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//połączenie z bazą danych
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose
}
