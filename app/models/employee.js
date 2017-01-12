var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var employeeSchema = new Schema({
    name: String,
    age: { type: Date },
    regDate: { type: Date },
    email: String,
    description: String,
    phoneNumber: Number,
    pswd: String,
    rating: Number,
    picture: String,
    gender: String
});

var Employees = mongoose.model('Employees', employeeSchema);

module.exports = Employees;