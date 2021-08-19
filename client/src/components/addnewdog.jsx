import React, {useState, useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import { getDogs, getTemperaments, postNewDog } from "../acctions";
import style from "./addnewdog.module.css"
import pic1 from "../images/buble.png"
import pic2 from "../images/dachshund.png"


export default function Addnewdog(){
    const allDogs = useSelector(store => store.dogs)
    const dispatch = useDispatch();
    const temperaments = useSelector((state)=> state.temperaments)
    const history = useHistory();
    const [errors, setErrors] = useState({name: ""});
    const [classError, setclassError] = useState(false);
    var createbutton = Object.entries(errors).length === 0? style.createbutton : style.createbutton2

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
        return() => {
            dispatch(getDogs())
        }
    }, [dispatch]);

    function validate(input) {
        const existentName = allDogs.filter((e)=> e.name.toLowerCase() === input.name.toLowerCase());
        let errors = {};
        if (!input.name) {
          errors.name = 'Name is required';
        } else if (!/^[a-zA-Z\s]*$/.test(input.name)) {
          errors.name = 'Name is invalid';
        }  else if(existentName.length > 0) {
            errors.name = 'Name already exists';
        } 
        if (!input.weightMin || !input.weightMax || input.weightMin === "0") {
          errors.weight = 'Weight is required';
        } else if (parseInt(input.weightMin) >= parseInt(input.weightMax)) {
          errors.weight = 'Weight Max should be bigger than Weight Min';
        }
        if (!input.heightMin || !input.heightMax || input.heightMin === "0") {
            errors.height = 'Height is required';
          } else if (parseInt(input.heightMin) >= parseInt(input.heightMax)) {
            errors.height = 'Height Max should be bigger than Height Min';
          }
          if (!input.lifespanMin || !input.lifespanMax || input.lifespanMin === "0") {
            errors.lifespan = 'Lifespan is required';
          } else if (parseInt(input.lifespanMin) >= parseInt(input.lifespanMax)) {
            errors.lifespan = 'Lifespan Max should be bigger than Lifespan Min';
          }
          if (!input.image) {
            errors.image = 'Image is required';
          }
          if (input.temperament.length === 0) {
            errors.temperament = 'Please choose the temperaments';
          }
      
        return errors;
      };

    function handleChange(e) {
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
          }));

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

    async function handleSubmit(e) {
        e.preventDefault();
        if(Object.entries(errors).length === 0) {
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
        alert("Your Dog was successfully created!");
        history.push("/home");

    }
        }
        
    function handleCreate(e) {
        e.preventDefault();
        setclassError(true)
    }

    

    return(
    <div>
        <div><img className={style.buble} src={pic1} alt="" /></div>
        {classError === false &&(<h4 className={style.requirement}>Please complete all the fields!</h4>)}
        {classError === true && Object.entries(errors).length === 0 &&(<h4 className={style.ready}>Your Dog is ready to
            be created!</h4>)}
        {classError === true && (<div className={style.errorsbox}>
            {errors.name && (<h6 className={style.error}>{errors.name}</h6>)}
            {errors.weight && (<h6 className={style.error}>{errors.weight}</h6>)}
            {errors.height && (<h6 className={style.error}>{errors.height}</h6>)}
            {errors.lifespan && (<h6 className={style.error}>{errors.lifespan}</h6>)}
            {errors.image && (<h6 className={style.error}>{errors.image}</h6>)}
            {errors.temperament && (<h6 className={style.error}>{errors.temperament}</h6>)}
        </div>)}
        <div><img className={style.dogpic} src={pic2} alt="" /></div>
        <h2 className={style.selecttemp}>Select Temperaments:</h2>
        <div className={style.circle}></div>
        <div className={style.circle2}></div>
        <div className={style.circle3}></div>
        <div className={style.circle4}></div>
        <div className={style.circle5}></div>
        <Link to="/home"><button className={style.backbutton}>Back</button></Link>
        <form onChange={(e)=> handleChange(e)}>
            <div className={style.form_box}>
                <h2>Create a new Dog!</h2>
                <div className={style.name_box}>
                    <label>Name:</label>
                    <input type="text" defaultValue={input.name} name="name" />
                </div>
                <div className={style.complete_box}>
                    <label>Weight: Kg</label>
                    <input type="number" min="0" defaultValue={input.weightMin} name="weightMin" placeholder="Min" />
                    <input type="number" min="0" defaultValue={input.weightMax} name="weightMax" placeholder="Max" />
                </div>
                <div className={style.complete_box}>
                    <label>Height: Cm</label>
                    <input type="number" min="0" defaultValue={input.heightMin} name="heightMin" placeholder="Min" />
                    <input type="number" min="0" defaultValue={input.heightMax} name="heightMax" placeholder="Max" />
                </div>
                <div className={style.complete_box}>
                    <label>Life Span: Years</label>
                    <input type="number" min="0" defaultValue={input.lifespanMin} name="lifespanMin"
                        placeholder="Min" />
                    <input type="number" min="0" defaultValue={input.lifespanMax} name="lifespanMax"
                        placeholder="Max" />
                </div>
                <div className={`${style.name_box} ${style.img}`}>
                    <label>Image:</label>
                    <input type="text" defaultValue={input.image} name="image" />
                </div>
                <button type="submit" onClick={(e)=> handleSubmit(e)} onMouseOver={(e) => handleCreate(e)}
                    className={createbutton} >Create Dog</button>
            </div>
            <div className={style.temperaments}>
                {temperaments.map((temp) => (
                <label key={temp.id}>
                    <input type="checkbox" defaultValue={temp.name} name={temp.name} />{temp.name}</label>
                ))}
            </div>
        </form>

    </div>
    )
}