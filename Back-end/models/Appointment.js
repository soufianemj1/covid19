const mongoose = require('mongoose');

const Appointment = mongoose.Schema({
    CIN:{type:String, required:[false,"le champs CIN est Obligatoire"]},
    Age:{type:Number ,required:[false,"le champs Age est Obligatoire"]},
    Ville:{type:String ,required:[false,"le champs Ville est Obligatoire"]},
    Dose:{type:Number , required:[false,"le champs Dose est Obligatoire"]},
    Email:{type:String, required:[false,"le champs Email est Obligatoire"]},
    Date:{type:String, required:[false,"le champs Date est Obligatoire"]},
},{timestamps:true})

module.exports = mongoose.model('Appointment',Appointment);