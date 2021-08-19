import React from 'react'
import style from "./pagination.module.css"


const Pagination = ({postsPerPage, totalPosts, paginate,}) =>{
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++){
        pageNumbers.push(i);      
    }
    return (
        <div className={style.buttons}>
                {pageNumbers && pageNumbers.map(number =>
                    <button className={style.button} key={number} onClick={()=>paginate(number)}>{number}</button>
                )}
        </div>
    )
}

export default Pagination;
