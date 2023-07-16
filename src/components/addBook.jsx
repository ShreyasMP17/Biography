import "../styles/addBook.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
    let navigate = useNavigate()

    let [Name, setName] = useState("")
    let [DOB, setDOB] = useState("")
    let [Role, setRole] = useState("")
    let [Place, setPlace] = useState("")
    let [Height, setHeight] = useState("")
    let [shortDescription, setShortDescription] = useState("")
    let [longDescription, setLongDescription] = useState("")
    let [thumbnailUrl, setThumbnailURL] = useState("")

    let handleClick = (e) => {
        e.preventDefault();

        //data to be posted
        let bookData = {Name, DOB, Role, Place,Height, shortDescription, longDescription, thumbnailUrl }

        //posting to server
        fetch("https://biodb-0wdv.onrender.com/celebrities", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookData)
        })
        alert("Book added successfully")
        navigate('/admin/book-list')
    }
    //title, category,authors,pageCount,shortDescription,longDescription,thumbnailUrl
    return (
       
        <div className="addBook">
            <div className="space">
            <div className="cover">
            <h1>Add a Star</h1>
            <div className="form">
                <form action="" onSubmit={handleClick}>
                    <div className="title">
                        <label htmlFor="">Name : </label>
                        <input value={Name} onChange={(e) => setName(e.target.value)} type="text" required placeholder="title of the name" />
                    </div>
                    <div className="category">
                        <label htmlFor="">DOB : </label>
                        <input value={DOB} onChange={(e) => setDOB(e.target.value)} type="text" required placeholder="category of the DOB" />
                    </div>
                    <div className="authors">
                        <label htmlFor="">Role : </label>
                        <input value={Role} onChange={(e) => setRole(e.target.value)} type="text" required placeholder="authors of the role" />
                    </div>
                    <div className="pageCount">
                        <label htmlFor="">Place : </label>
                        <input value={Place} onChange={(e) => setPlace(e.target.value)} type="text" required placeholder="number of place" />
                    </div>
                    <div className="Height">
                        <label htmlFor="">Height : </label>
                        <input value={Height} onChange={(e) => setHeight(e.target.value)} type="text" required placeholder="number of height" />
                    </div>
                    <div className="shortDescription">
                        <label htmlFor="">SHORT DESCRIPTION : </label>
                        <textarea value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} name="" id="" cols="30" rows="2" placeholder="enter the description"></textarea>
                    </div>
                    <div className="longDescription">
                        <label htmlFor="">LONG DESCRIPTION : </label>
                        <textarea value={longDescription} onChange={(e) => setLongDescription(e.target.value)} name="" id="" cols="30" rows="2" placeholder="enter the description"></textarea>
                    </div>
                    <div className="thumbnailUrl">
                        <label htmlFor="">THUMBNAIL URL : </label>
                        <input value={thumbnailUrl} onChange={(e) => setThumbnailURL(e.target.value)} type="text" placeholder="thumbnail URl" />
                    </div>
                    <button> Add Book</button>
                </form>
            </div>
            </div>
            </div>
        </div>
        
    );
}

export default AddBook;