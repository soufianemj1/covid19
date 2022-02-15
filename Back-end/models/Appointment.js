const mongoose = require('mongoose');

const Appointment = mongoose.Schema({
    CIN:{type:String, required:[true,"le champs CIN est Obligatoire"]},
    Age:{type:Number ,required:[true,"le champs Age est Obligatoire"]},
    Adresse:{type:String ,required:[true,"le champs Adreese est Obligatoire"]},
    Ville:{type:String ,required:[true,"le champs Ville est Obligatoire"]},
    Dose:{type:Number , required:[true,"le champs Dose est Obligatoire"]},
    Tel:{type:String, required:[true,"le champs Tel est Obligatoire"]},
    Date:{type:String, required:[true,"le champs Date est Obligatoire"]},
},{timestamps:true})

module.exports = mongoose.model('Appointment',Appointment);