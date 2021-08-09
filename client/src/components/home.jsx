import React from "react";
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import { filterCreated, getDogs, getDogsByName, getDogsByTemperament, sortByName } from "../acctions/index";
import { Link } from "react-router-dom";
import Card from "./card";
import Pagination from "./pagination"

export default function Home() {
    const dispatch = useDispatch();
    const allDogs = useSelector(store => store.dogs)
    // const [posts, setPosts] = useState([]);
    const [loading, setloading] = useState(true);
    const [currentPage, setcurrentPage] = useState(1);
    const [postsPerPage] = useState(9);
    const [updated, setupdated] = useState();

    // Get current posts
    const indexOfTheLastPost = currentPage * postsPerPage;
    const indexOfTheFirstPost = indexOfTheLastPost - postsPerPage;
    const currentPosts = allDogs.slice(indexOfTheFirstPost, indexOfTheLastPost);

    // Get the input of the search bar
    const [inputText, setinputText] = useState({inputText:"", by: "breed"})

    const paginate = (pageNumber) => {
        setcurrentPage(pageNumber)
    }
    

    useEffect(()=> {
        dispatch(getDogs())
        setloading(false);
    },[dispatch])

    function handleClick(e){
        e.preventDefault();
        dispatch(getDogs());
    }

    function handleChangeInput(e) {
        e.preventDefault();
        setinputText({...inputText, inputText: e.target.value})
    }

    function handleOptionSearch(e) {
        e.preventDefault();
        setinputText({...inputText, by: e.target.value})
    }

    function handleClickSubmit(e) {
        if(inputText.by === "breed") {
            dispatch(getDogsByName(inputText.inputText))
        }
        if(inputText.by === "temperament") {
            dispatch(getDogsByTemperament(inputText.inputText))
        }
    }

    function handleFilterCreated(e) {
        dispatch(filterCreated(e.target.value))
    }

    function handleSort(e) {
        e.preventDefault();
        dispatch(sortByName(e.target.value));
        setcurrentPage(1);
        setupdated(`sorted ${e.target.value}`)

    }

    return(
        <div>
            <Link to= "/dog">Create New Dog</Link>
            <h1>Dog Breeds</h1>
            <button onClick = {e=> {handleClick(e)}}>Refresh All Dogs</button>
            <div>
                <input type="text" placeholder="Search..." onChange={(e) => handleChangeInput(e)}/>
                <select onChange={(e)=> handleOptionSearch(e)}>
                    <option value="breed">breed</option>
                    <option value="temperament">temperament</option>
                </select>
                <button onClick={(e)=> handleClickSubmit(e)}>Search</button>
                <select>
                    <option value="alphabetic">A-Z</option>
                    <option value="weight">weight</option>
                </select>
                <select onChange={(e)=> handleFilterCreated(e)}>
                    <option value="all">all</option>
                    <option value="existent">existent</option>
                    <option value="created">created by me</option>
                </select>
                <select onChange={(e)=> handleSort(e)}>
                    <option value="asc">ascending</option>
                    <option value="des">descending </option>
                </select>
                {
                    currentPosts && currentPosts.map(ele => {
                        return (
                        <div key={ele.id}>
                        <Card name={ele.name} dogImage={ele.image} temperament={ele.temperament} loading={loading}/>
                        
                        </div>
                    )})
                }
            </div>
            <div><Pagination postsPerPage={postsPerPage} totalPosts={allDogs.length} paginate={paginate}/></div>
        </div>
    )
}