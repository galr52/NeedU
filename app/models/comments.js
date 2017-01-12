var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var commentSchema = new Schema({
    critic: { type: Schema.Types.ObjectId, ref: 'Employee' },
    employee: { type: Schema.Types.ObjectId, ref: 'Employee' },
    date: { type: Date },
    text: String,
    rank: Number
});

var Comments = mongoose.model('Comments', comentSchema);

module.exports = Comments;