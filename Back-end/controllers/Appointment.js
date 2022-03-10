const RDV = require('../models/Appointment');
const dayjs = require('dayjs');
const nodemailer = require('nodemailer');

exports.create = (req,res) =>{

    let date = new Date();

    const rdv = new RDV({

        CIN: req.body.cin,
        Age: req.body.age,
        Ville: req.body.ville,
        Dose: req.body.dose,
        Email: req.body.email,
        Date: date

    });

    rdv
     .save(rdv)
     .then(data => {
        res.status(200).json(data);
     })
     .catch(err => console.warn(err))

}

exports.findAll = (req,res) => {

    RDV.find()
    .then(data => { 
        let today = dayjs(Date()).format('D');
        data.map((el) => {

            let day = dayjs(el.Date).format('D');
            let month = dayjs(el.Date).format('M');
            let newMonth = parseInt(month) + 1;
       
            if ( newMonth && parseInt(day) == today) {

                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                      user: 'testcoding975@gmail.com',
                      pass: 'testCoding1998'
                    }
                });
                    
                const mailOptions = {
                    from: 'testcoding975@gmail.com',
                    to: el.Email,
                    subject: 'Appointment ',
                    text: "Your next vaccin it's ready to take it "
                };
                
                transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                    }
                });

            }
        })
        // res.json(data)
        res.status(200).json(data)

    }) 
    .catch(err => { 
      console.log(err);
    })
  
};