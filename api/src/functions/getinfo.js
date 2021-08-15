const axios = require("axios");
const {Dog, Temperament} = require('../db');

const getApiInfo = async () => {
    const apiUrl = await axios.get('https://api.thedogapi.com/v1/breeds');
    const apiInfo = await apiUrl.data.map(element => {
            return {
                id: element.id,
                name: element.name,
                weight: element.weight.metric.slice(0,4) === "NaN" ||
                element.weight.metric.slice(0,8) === "NaN - 8" ? "15 - 20 kg": element.weight.metric.concat(" kg"),
                height: element.height.metric.concat(" cm"),
                lifespan: element.life_span,
                image: element.image.url,
                temperament: element.temperament
            }
        });
        return apiInfo
    }
    
const getDBinfo = async () => {
    const dogsInDB = await Dog.findAll({
        include: {
            model: Temperament,
            attributes: ['name'],
            through: {
                attributes: [],
            }
        }
    })
    const dogsInDBinfo = await dogsInDB.map(element => {
        return {
            id: element.id,
            name: element.name,
            weight: element.weight.concat(" kg"),
            height: element.height.concat(" cm"),
            lifespan: element.lifespan.concat(" years"),
            image: element.image,
            temperament: element.temperaments.map(el => el.name).join(", "),
            createdInDb: element.createdInDb
        }
    });
    return dogsInDBinfo
}

const getAllDogs = async () => {
    const apidogs = await getApiInfo();
    const dbdogs = await getDBinfo();
    const result =  apidogs.concat(dbdogs);
    return result;
}



module.exports = {
    getApiInfo,
    getDBinfo,
    getAllDogs
}