import axios from "axios";
import { bindActionCreators } from "redux";
import {GET_DOGS, GET_DOGS_BY_NAME, GET_DOGS_BY_TEMPERAMENT, GET_DOG_BY_ID, FILTER_CREATED, SORT_BY_NAME, SORT_BY_WEIGHT, GET_TEMPERAMENTS, POST_NEW_DOG} from "./const";

export function getDogs() {
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/dog",);
        return dispatch({
            type: GET_DOGS,
            payload: await json.data
        })
    }
}

export function getDogsByName(payload) {
    return async function(dispatch){
        var json = await axios.get(`http://localhost:3001/dog?name=${payload}`,);
        return dispatch({
            type: GET_DOGS_BY_NAME,
            payload: await json.data
        })
    }
}

export function getDogsByTemperament(payload) {
    return async function(dispatch){
        var json = await axios.get(`http://localhost:3001/dog?temperament=${payload}`,);
        return dispatch({
            type: GET_DOGS_BY_TEMPERAMENT,
            payload: await json.data
        })
    }
}
export function getTemperaments() {
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/dogtemperament");
        return dispatch({
            type: GET_TEMPERAMENTS,
            payload: await json.data
        })
    }
}

export function getDogByID(payload) {
    return async function(dispatch){
        var json = await axios.get(`http://localhost:3001/dog/${payload}`);
        return dispatch({
            type: GET_DOG_BY_ID,
            payload: await json.data
        })
    }
}

export function postNewDog(payload) {
    return async function(dispatch){
        var response = await axios.post("http://localhost:3001/dog", payload);
        return response;
    
    }
}

export function filterCreated(payload) {
    return {
        type: FILTER_CREATED,
        payload
    }
}

export function sortByName(payload) {
    return {
        type: SORT_BY_NAME,
        payload
    }
}

export function sortByWeight(payload) {
    return {
        type: SORT_BY_WEIGHT,
        payload
    }
}