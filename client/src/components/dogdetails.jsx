import React from "react";
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import {getDogByID} from "../acctions/index";
import { Link } from "react-router-dom";
import style from "./dogdetails.module.css"
import pic1 from "../images/ball.png"

export default function Detail(props){
    const dispatch = useDispatch();
    const detailedDog = useSelector((state)=> state.detail);
   
    useEffect(()=>{
        dispatch(getDogByID(props.match.params.id))
    },[dispatch])

    return (
        <div className={style.background}>
            {
            detailedDog.length > 0 ?
            <div className={style.container}>
                <div>
                <Link to="/home"> <button className={style.button}>Back</button></Link>
                    <img src={pic1} alt="" className={style.ball} />
                <img src={detailedDog[0].image} alt="Image not Found" className={style.img} />
                </div>
                <div className={style.info}>
                <h2>Name: {detailedDog[0].name}</h2>
                <h4>Temperaments: {detailedDog[0].temperament}</h4>
                <h4>Weight: {detailedDog[0].weight}</h4>
                <h4>Height: {detailedDog[0].height}</h4>
                <h4>Lifespan: {detailedDog[0].lifespan}</h4>
                </div>

            </div> : <p>Loading...</p>
            }
        </div>
    )
}