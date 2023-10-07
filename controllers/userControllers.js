const User = require('../models/user');

const index = async(req, res)=>{
    const users = await User.findAll();
    const records = users.map((v)=> v.dataValues)
    res.render('index', {records});
};

const home = async(req, res)=>{
    try {
        const {first_name, last_name, age} = req.body;
        await User.create({first_name, last_name, age});
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }
    

}

const testing = (req, res)=>{
    res.send('It is working');
}

module.exports = {
    index,
    home,
    testing
}