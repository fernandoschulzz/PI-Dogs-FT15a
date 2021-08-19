const axios = require('axios');
const express = require('express');
const router = express.Router();
const {Dog,Temperament} = require('../db');
// const {getApiInfo, getDBinfo, getAllDogs} = require("../functions/getinfo")

router.get("/", async (req, res) => {
    var temperaments = await axios.get('https://api.thedogapi.com/v1/breeds');
    var temperamentsArray = temperaments.data.map(ele => ele.temperament).join().replace(/\s/g, "").split(',');
    temperamentsArray.forEach(el => {
        if(el.length >1) {
        Temperament.findOrCreate({
            where: {
                name: el
            }
        })}
    });
    const allTemperaments = await Temperament.findAll();
    const allTemperamentsSorted = await allTemperaments.sort(function(a,b){
        var aName= a.name.toLowerCase();
        var bName= b.name.toLowerCase();
        if(aName > bName) {
            return 1;
        }
        if(bName > aName) {
            return -1;
        }
        return 0
    })
    res.send(allTemperamentsSorted)
})



module.exports = router;