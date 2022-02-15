const RDV = require('../models/Appointment');

exports.create = (req,res) =>{

    let date = new Date();

    const rdv = new RDV({

        CIN: req.body.cin,
        Age: req.body.age,
        Adresse: req.body.adresse,
        Ville: req.body.ville,
        Dose: req.body.dose,
        Tel: req.body.tel,
        Date: date

    });

    rdv
     .save(rdv)
     .then(data => {
        res.status(200).json(data);
     })
     .catch(err => console.warn(err))

}