const express = require('express');
const router = express.Router();
const {Dog, Temperament} = require('../db');
const {getAllDogs} = require("../functions/getinfo")

router.get("/", async (req, res) => {
    const name = req.query.name;
    const temperament = req.query.temperament;
    let searchResult = await getAllDogs();
    if (!name && !temperament) {
        return res.status(200).send(searchResult)
    } 
    if(temperament){
        let temperamentSearch = await searchResult.filter(el => el.temperament && el.temperament.toLowerCase().includes(temperament.toLowerCase()));
        if (temperamentSearch.length) {
            return res.status(200).send(temperamentSearch)
        } else {
            return res.status(400).send("Temperament was not Found")
        }

    } else {
        let nameSearch = await searchResult.filter(el => el.name.toLowerCase().includes(name.toLowerCase()));
        if (nameSearch.length) {
            return res.status(200).send(nameSearch)
        } else {
            return res.status(400).send("Name was not Found")
        }
    }
})

router.get("/:id", async (req,res) =>{
    const id = req.params.id;
    let allDogs = await getAllDogs();
    if(id){
       let searchIdDog = allDogs.filter(e=> e.id == id);
       if(searchIdDog.length){
           res.status(200).json(searchIdDog);
       } else {
           res.status(404).send("The Dog was not found!")
       }
    } else {
        res.status(404).send("There is no valid ID!")
    }
})

router.post("/", async (req, res)=> {
    const {name,weight,height,lifespan,image,temperament,createdInDb} = req.body;
    let createdDog = await Dog.create({
        name,
        weight,
        height,
        lifespan,
        image,
        createdInDb
    })
    let dbtemperament = await Temperament.findAll({
        where: {name: temperament}
    });
    createdDog.addTemperament(dbtemperament);
    res.send("Your Dog was created successfully")
})


module.exports = router;