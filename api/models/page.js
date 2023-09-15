const mongoose = require('mongoose');

const pageSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: { type: String, required: true },
    pageHtml: { type: String, required: true },
})

module.exports = mongoose.model('Page', pageSchema);