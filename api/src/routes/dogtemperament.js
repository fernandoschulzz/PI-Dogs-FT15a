const axios = require('axios');
const express = require('express');
const router = express.Router();
const {Dog,Temperament} = require('../db');
// const {getApiInfo, getDBinfo, getAllDogs} = require("../functions/getinfo")

router.get("/", async (req, res) => {
    var temperaments = await axios.get('https://api.thedogapi.com/v1/breeds');
    var temperamentsArray = temperaments.data.map(ele => ele.temperament).join().replace(/\s/g, "").split(',');
    temperamentsArray.forEach(el => {
        Temperament.findOrCreate({
            where: {
                name: el
            }
        })
    });
    const allTemperaments = await Temperament.findAll();
    res.send(allTemperaments)
})



module.exports = router;