var mongoose = require('mongoose');

var cakeSchema = mongoose.Schema({
    name: String,
    time: Number,
    ingredients: [mongoose.Schema.Types.Mixed],
    meta: Object
});

module.exports = mongoose.model('novikolacic', cakeSchema);
