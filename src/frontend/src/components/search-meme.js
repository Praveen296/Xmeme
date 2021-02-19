import React, { useState } from 'react'
import axios from '../axios';
import Meme from './meme-component';

//Component for searching meme
function SearchMeme() {

    const [id,setId] = useState(""); //Stores the ID that is entered in the form.
    const [meme,setMeme] = useState({}); //Stores the meme object that is fetched from backend


    //Called for searching the meme.
    const searchMeme = (e) => {

        e.preventDefault();
        //Calling the get request
        axios.get('/memes/' + id).then(response => {
            setMeme(response.data); //Response data is stored in the meme object.
        }).catch(err => {
            alert(err.response.statusText + " " + err.response.status + " " + err.response.data); //Error description
        });
        setId(''); //After fetching the meme object, id value is set to empty.
        
    }


    //Rendering the form for entering the meme ID and the found Meme object is rendered below it.
    return (
        <div>
            <form>
            <div class="form-group">
                <label>Search a meme</label>
                <input value= {id} onChange= {e => setId(e.target.value)} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Meme ID"/>
            </div>
            
            <button type="submit" class="btn btn-primary" onClick= {searchMeme}>Submit</button>
            
            <Meme key = {meme._id} username = {meme.username} caption = {meme.caption} imageUrl = {meme.imageUrl}/>
        </form> 
        </div> 
    )
}

export default SearchMeme
