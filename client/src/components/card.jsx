import React from "react";
import { Link } from "react-router-dom";
import style from "./card.module.css"

export default function Card({name, dogImage, temperament, id, loading,}) {
    if(loading){
        return(
            <h1>Loading...</h1>
        )
    }
    return (
        <div className={style.mainContainer}>
            <div className={style.card}>
                <div className={style.cardfront}>
                     <Link to={`/dog/${id}`}>
                     <div className={style.image_container}>
                      <img src={dogImage} alt="Not Found" className={style.image} />
                     </div></Link>
                     <div className={style.card_content}></div>
                     <p className={`${style.card_title} ${style.text}`} >{name}</p>
                </div>
                {/* <div className={style.cardback}>
                     <Link to={`/dog/${id}`}>
                     <div className={style.image_container}>
                      <img src={dogImage} alt="Not Found" className={style.image} />
                     </div></Link>
                     <div className={style.card_content}></div>
                     <p className={`${style.card_title} ${style.text}`} >{name}</p>
                </div> */}
            {/* <div className={style.card_info}>
            <p className={style.text}>{temperament}</p>
            </div> */}
            
        </div>
        </div>
    )
}