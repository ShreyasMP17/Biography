import "../styles/bookList.css"
import { useState,useEffect } from "react";
import { useNavigate,useLocation } from "react-router-dom";

const BookList = () => {
    
    let [books,setBooks]=useState([])
    useEffect(()=>{
        let fetchData = async() => {
            let response = await fetch("https://biodb-0wdv.onrender.com/celebrities")
            let data= await response.json()
            setBooks(data)
        }
        fetchData()
    },[books])   //its is used delete,[]
    let handleClick = (id,title)=>{   
        fetch(`https://biodb-0wdv.onrender.com/celebrities/${id}`,{
            method:"DELETE"
        })
        alert(`${title} will be deleted permently`)

        // setBooks(books.filter(s=>s.id!=id))
        // alert(`${title} has been deleted`)
    } 
    
    let location = useLocation()
    let navigate = useNavigate()
    let handleRead=(id)=>{
        // navigate(`/admin/book-list/${id}`)
        if(location.pathname == '/admin/book-list'){
            navigate(`/admin/star-list/${id}`)
        }else{
            navigate(`/user/star-list/${id}`)
        }
    }
                                             
    return ( 
        <div className="bookList">
            <h1> List : {books.length}</h1>
            <div className="book_section">
                {books.map(data=>(
                    <div className="books">
                        <div className="bkImage">
                            <img src={data.thumbnailUrl} alt="" />
                        </div>
                        <div className="book">
                        <h1>{data.Name}</h1>
                        <h2>{data.Role}</h2>
                        <h2>{data.DOB}</h2>
                        <h2>{data.place}</h2>
                        <h4>Height : {data.Height}</h4>
                        {location.pathname=='/admin/book-list'&&<button onClick={()=>handleClick(data.id,data.title)}>Remove</button> }
                        {/* <button onClick={()=>handleClick(data.id,data.title)}>Remove</button> */}
                        <button onClick={()=>handleRead(data.id)} id="read">See more...</button>
                        </div>
                    </div>
                    
                ))}
            </div>
        </div>
     );
}
 
export default BookList;
