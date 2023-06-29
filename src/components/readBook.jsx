import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/readBook.css"

const ReadBook = () => {
    let [book,setBook]=useState([])
    let params =useParams()
    useEffect(()=>{
        let fetchData = async() => {
            let response = await fetch(`http://localhost:3000/celebrities/${params.id}`)
            let data= await response.json()
            setBook(data)
        }
        fetchData()
    }) 
    return ( 
        <div className="readBook">
            <div className="card">
            <h1></h1>
            <h2>{book.Name}</h2>
            <div className="card_footer">
            <p>{book.shortDescription}</p>
            <p>{book.longDescription}</p>
            </div>
            </div>
        </div>
     );
}
 
export default ReadBook;