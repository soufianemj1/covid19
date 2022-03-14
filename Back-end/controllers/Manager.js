const mngr = require('../models/Manager');
var jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');


exports.login = async(req,res) => {

    const { email, password } = req.body;

    if(!email || !password)
        return res.status(400).send({ message: 'Please fill all the fields' });
    
    const found_Manager = await mngr.findOne({
        Email: email,
        Password: password
    });

    if (!found_Manager) {
        res.status(404).send({ message:'user not found !' })
    }else{
        let region = found_Manager.Region;
        const token = jwt.sign(
            { id: found_Manager._id, email:found_Manager.email, password:found_Manager.password },
            `${process.env.JWT_SECRET_KEY}`,
            {
                expiresIn: "1h",
            }
        );
        
        res.status(200).json({token, role:'manager', message: "You logged in successfully", region:region});

    }
}

exports.create = async (req,res) => {

    const { email, name, region } = req.body;

    let password = (Math.random() + 1).toString(36).slice(2);

    if (!email || !name )
        return res.status(400).json({ message: "Please fill all the fields" });


    const allManagers = await mngr.find();

    allManagers.forEach(element => {

        if(element.Email == email)
            return res.status(400).json({ message: "Manager already exists" })

    });
   
    const newManager = new mngr({

        Name: name,
        Email: email,
        Password: password,
        Region: region,

    });

    newManager
     .save(newManager)
     .then(data => { 

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'testcoding975@gmail.com',
              pass: 'testCoding1998'
            }
        });
            
        const mailOptions = {
            from: 'testcoding975@gmail.com',
            to: data.Email,
            subject: 'Account Password',
            text: "Your password is "+data.Password
        };
        
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });

        res.status(200).json(data) 
      })
     .catch(err => console.warn(err));

}

exports.findAll = (req,res) => {

    mngr.find()
    .then(data => { 
      res.status(200).json(data)
    }) 
    .catch(err => { 
      console.log(err);
    })
  
};

exports.delete = (req,res) => {
    const id = req.params._id;

    mngr.findByIdAndDelete(id)
    .then(data => {

        if (!data) {
            res.status(404).send({
                message: `Manager not found!`
            });
            } else {
            res.send({
                message: "Manager deleted successfully!"
            });
        }
    })
    .catch(err => console.warn(err))
}