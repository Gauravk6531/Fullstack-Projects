const express = require('express');
const router = express.Router();
const User = require('../models/User');

//Login route
router.post('/login', async (req, res)=>{
    const {username, password} = req.body;
    const user = await User.findOne({username, password});
    if(user){
        res.send({status:"ok"});
    }else{
        res.send({status:"error", error:"Invalid username or password"});
    }
});

//register route
router.post('/register', async (req, res)=>{
    const {username, password} = req.body;
    const user = new User({username, password});
    await user.save();
    res.send({status:"ok"});
});

module.exports = router;