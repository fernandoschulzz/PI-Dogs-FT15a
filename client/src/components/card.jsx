import React from "react";
import { Link } from "react-router-dom";
import style from "./card.module.css"

export default function Card({name, dogImage, temperament, id}) {
   
    return (
        
        <div className={style.mainContainer}>
            <Link to={`/dog/${id}`}>
            <div className={style.card}>
                     <div className={style.image_container}>
                      <img src={dogImage} alt="Not Found" className={style.image} />
                     </div>
                     <div className={style.card_content}>
                     <p className={style.text} >{name}</p>
                     <p className={style.text2} >{temperament}</p>
                     </div>
        </div>
        </Link>
        </div>
    )
}