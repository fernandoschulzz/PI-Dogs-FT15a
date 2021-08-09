import React from "react";

export default function Card({name, dogImage, temperament, loading}) {
    if(loading){
        return(
            <h1>Loading...</h1>
        )
    }
    return (
        <div>
            <img src={dogImage} alt="Not Found" width="200px" height="200px" />
            <h4>{name}</h4>
            <h5>{temperament}</h5>
        </div>
    )
}