const { default: axios } = require('axios');
const express = require('express');
const router = express.Router();
const {Dog, Temperament} = require('../db');
// const {getApiInfo, getDBinfo, getAllDogs} = require("../functions/getinfo")

router.get("/", async (req, res)=> {
  
})



module.exports = router;