import React from "react";
import { Link } from "react-router-dom";
import style from "./landingpage.module.css"
import pic1 from "../images/bone1.png"
import pic2 from "../images/bone2.png"
import pic3 from "../images/bone3.png"
import pic4 from "../images/bone4.png"
import pic5 from "../images/dogruning.png"
import pic6 from "../images/doghome.png"
import pic7 from "../images/buttonhome.png"

export default function LandingPage(){
    return(
        <div>
        <section>
            <h1 >Welcome to the Dog App</h1>
            <div className={style.set}>
                <div className={style.bone1}><img src={pic1} alt="image not found" /></div>
                <div className={style.bone2}><img src={pic2} alt="image not found" /></div>
                <div className={style.bone3}><img src={pic3} alt="image not found" /></div>
                <div className={style.bone4}><img src={pic4} alt="image not found" /></div>
                <div className={style.bone5}><img src={pic1} alt="image not found" /></div>
                <div className={style.bone6}><img src={pic2} alt="image not found" /></div>
                <div className={style.bone7}><img src={pic3} alt="image not found" /></div>
                <div className={style.bone8}><img src={pic4} alt="image not found" /></div>
            </div>
            <div className={style.set3}>
                <div className={style.bone1}><img src={pic1} alt="image not found" /></div>
                <div className={style.bone2}><img src={pic2} alt="image not found" /></div>
                <div className={style.bone3}><img src={pic3} alt="image not found" /></div>
                <div className={style.bone4}><img src={pic4} alt="image not found" /></div>
                <div className={style.bone5}><img src={pic1} alt="image not found" /></div>
                <div className={style.bone6}><img src={pic2} alt="image not found" /></div>
                <div className={style.bone7}><img src={pic3} alt="image not found" /></div>
                <div className={style.bone8}><img src={pic4} alt="image not found" /></div>
            </div>
            <div><img className={style.dogruning} src={pic5} alt="image not found" /></div>
            <div><img className={style.doghome} src={pic6} alt="image not found" /></div>
            <Link to = "/home">
                 <div><img className={style.buttonhome} src={pic7} alt="image not found" /></div>
                </Link>
            <div className={style.set2}>
                <div className={style.bone1}><img src={pic1} alt="image not found" /></div>
                <div className={style.bone2}><img src={pic2} alt="image not found" /></div>
                <div className={style.bone3}><img src={pic3} alt="image not found" /></div>
                <div className={style.bone4}><img src={pic4} alt="image not found" /></div>
                <div className={style.bone5}><img src={pic1} alt="image not found" /></div>
                <div className={style.bone6}><img src={pic2} alt="image not found" /></div>
                <div className={style.bone7}><img src={pic3} alt="image not found" /></div>
                <div className={style.bone8}><img src={pic4} alt="image not found" /></div>
            </div>
            
                
        </section>
        
    </div>
    )
}