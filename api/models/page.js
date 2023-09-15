const mongoose = require('mongoose');

const pageSchema = mongoose.Schema({
    title: { type: String, required: true },
    pageHtml: { type: String, required: true },
})

module.exports = mongoose.model('Page', pageSchema);