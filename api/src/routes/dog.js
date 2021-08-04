const express = require('express');
const router = express.Router();
const {getApiInfo, getDBinfo, getAllDogs} = require("../functions/getinfo")

router.get("/", async (req, res)=> {
    const name = req.query.name;
    let searchResult = await getAllDogs();
    if(!name) {
        return res.status(200).send(searchResult)
    }
    else {
        let nameSearch = await searchResult.filter(el => el.name.toLowerCase().includes(name.toLowerCase()));
        if(nameSearch.length){
            return res.status(200).send(nameSearch)
        } else {
            return res.status(400).send("Name was not Found")
        }
    }
})


module.exports = router;