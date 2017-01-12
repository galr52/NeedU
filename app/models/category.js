var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var categorySchema = new Schema({
    name: String,
});

var Categories = mongoose.model('Categories', categorySchema);

module.exports = Categories;