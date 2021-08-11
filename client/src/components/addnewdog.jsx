import React, {useState, useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import { getDogs, getTemperaments, postNewDog } from "../acctions";


export default function Addnewdog(){
    const dispatch = useDispatch();
    const temperaments = useSelector((state)=> state.temperaments)
    const history = useHistory();

    const [input, setInput] = useState({
    name: "",
    weightMin: "",
    weightMax: "",
    heightMin: "",
    heightMax: "",
    lifespanMin: "",
    lifespanMax: "",
    image: "",
    temperament: [],
    // createdInDb: "true"
    })

    useEffect(()=> {
        dispatch(getTemperaments())
    });

    function handleChange(e) {
        if(input.hasOwnProperty(e.target.name)){
            setInput({
                ...input,
                [e.target.name]: e.target.value
            })
        } else {
            if(e.target.checked){
                setInput({
                    ...input,
                    temperament: [...input.temperament, e.target.name]
                })
            }
            if(!e.target.checked){
                setInput({
                    ...input,
                    temperament: input.temperament.filter(temp => temp !== e.target.name)
                })
            }
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        const json = {
            
                name: input.name,
                weight: input.weightMin.concat(" - ", input.weightMax),
                height: input.heightMin.concat(" - ", input.heightMax),
                lifespan: input.lifespanMin.concat(" - ", input.lifespanMax),
                image: input.image,
                temperament: input.temperament,
                createdInDb: "true"
        }
        dispatch(postNewDog(json));
        alert("Your Dog is created!");
        history.push("/home")

    }

    

    return(
        <div>
            <Link to ="/home"><button>Back</button></Link>
            <h2>Create a new Dog!</h2>
            <form onChange={(e)=> handleChange(e)}>
            <div>
                <label>Name:</label>
                <input 
                type="text"
                defaultValue={input.name}
                name= "name" />
            </div>
            <div>
                <label>Weight:</label>
                <input 
                type="number"
                min="0"
                defaultValue={input.weightMin}
                name= "weightMin" 
                placeholder= "Min"/>
                <input 
                type="number"
                min="0"
                defaultValue={input.weightMax}
                name= "weightMax" 
                placeholder= "Max"/>

            </div>
            <div>
                <label>Height:</label>
                <input 
                type="number"
                min="0"
                defaultValue={input.heightMin}
                name= "heightMin" 
                placeholder= "Min"/>
                <input 
                type="number"
                min="0"
                defaultValue={input.heightMax}
                name= "heightMax" 
                placeholder= "Max"/>

            </div>
            <div>
                <label>Life Span:</label>
                <input 
                type="number"
                min="0"
                defaultValue={input.lifespanMin}
                name= "lifespanMin" 
                placeholder= "Min"/>
                <input 
                type="number"
                min="0"
                defaultValue={input.lifespanMax}
                name= "lifespanMax" 
                placeholder= "Max"/>
            </div>
            <div>
                <label>Image:</label>
                <input 
                type="text"
                defaultValue={input.image}
                name= "image" />
            </div>
            <ul><li>{input.temperament.map(el => el + ", ")}</li></ul>
            <div>
            {temperaments.map((temp) => (
                <label key={temp.id}>
                <input 
                type="checkbox"
                defaultValue= {temp.name}
                name= {temp.name} />{temp.name}</label>
            ))}
            </div>
                </form>
                <button type="submit" onClick={(e)=> handleSubmit(e)}>Create Dog</button>
        </div>
    )
}