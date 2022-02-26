const mongoose = require('mongoose');

const Admin = mongoose.Schema({
    Name:{type:String, required:[true,"le champs Name est Obligatoire"]},
    Email:{type:String ,required:[true,"le champs Email est Obligatoire"]},
    Password:{type:String ,required:[true,"le champs Ville est Obligatoire"]},
},{timestamps:true})

module.exports = mongoose.model('Admin',Admin);