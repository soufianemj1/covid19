const Admin = require('../models/admin');
var jwt = require('jsonwebtoken');

exports.login = async(req,res) => {

    const { email, password } = req.body;

    if(!email || !password)
        return res.status(400).send({ message: 'Please fill all the fields' });
    
    const found_admin = await Admin.findOne({
        Email: email,
        Password: password
    });

    if (!found_admin) {
        res.status(404).send({ message:'user not found !' })
    }else{

        const token = jwt.sign(
            { id: found_admin._id, email:found_admin.email, password:found_admin.password },
            `${process.env.JWT_SECRET_KEY}`,
            {
                expiresIn: "1h",
            }
        );
        
        res.status(200).json({token, role:'admin', message: "You logged in successfully"});

    }
}