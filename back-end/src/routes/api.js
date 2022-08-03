const express = require('express');
const Auto = require('../models/Auto');
const router = express.Router();

//Listar todos los autos
router.get('/autos/',(req,res) => {
    Auto.find({}, (err, autos) => {
        return res.json(autos);
    })
})

//Dar de alta un auto
router.post("/autos/",(req,res) => {
    Auto.create(req.body, (err, auto) => {
        if(err){
            res.json(err);
        }else{
            return res.json(auto);
        } 
    })
})

module.exports = router;