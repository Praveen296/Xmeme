import React,{ useEffect,useState } from 'react'
import axios from './../axios';
import Meme from './meme-component';
import './memes-list.css';


//Component for rendering all the memes.
//Parent component of Meme component.
function MemesList() {

    //Used to store all the memes from backend.
    const [memes,setMemes] = useState([]);

    //Called everytime the component is loaded
    useEffect(()=> {

        axios.get('/memes').then(response => {
            setMemes(response.data); //All the meme objects are stored in the memes array.
        }) 
      },[]);

    //Rendering all the memes 
    return (
            <div className = 'meme__page'>
                <div className = 'meme__body'>
                    {memes.map(meme => (
                        //Sending data to the Meme component through props.
                        <Meme key = {meme._id} username = {meme.username} caption = {meme.caption} imageUrl = {meme.imageUrl}/>
                    ))}
                </div>
            </div>
        
    )
}

export default MemesList;
