import React from 'react'
import './meme-component.css';

//Component for rendering a single meme
function Meme({key,username,caption,imageUrl}) {


    return (
        <div className = 'meme'>
            <div className = 'meme__info'>
                <h3>Username : {username}</h3>
                <p>Caption : {caption}</p>
                <img src={imageUrl} alt=""/>                 

            </div>
        </div>
    )
}

export default Meme
