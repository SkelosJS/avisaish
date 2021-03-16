const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schemaAvis = new Schema({
    description: { type: String, required: true }
}, {
    timestamps: true
});

const AvisDesc = mongoose.model('AvisDesc', schemaAvis);

module.exports = AvisDesc;