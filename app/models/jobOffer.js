var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var jobOfferSchema = new Schema({
    title: String,
    employee: { type: Schema.Types.ObjectId, ref: 'Employee' },
    available: String,
    postDate: { type: Date },
    description: String,
    area: String,
    cost: String,
    experience: String,
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    education: String

});

var JobOffers = mongoose.model('JobOffers', jobOfferSchema);

module.exports = JobOffers;