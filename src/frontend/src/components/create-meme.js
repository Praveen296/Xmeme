import React,{ useState } from 'react';
import axios from './../axios';

//Component for creating meme
function CreateMeme() {

    const [username,setUsername] = useState("");
    const [imageUrl,setImageUrl] = useState("");
    const [caption,setCaption] = useState("");


    //Function which calls the post request
    const postMeme = (e) => {
        e.preventDefault();
        const newMeme = {
            username,
            caption,
            imageUrl
        }
        
        console.log(newMeme);

        
        axios.post('/memes',newMeme).
            then(response => {    //then gets called for successful response
                console.log(response);
                alert('Meme successfully submitted');
        }).
            catch(err => {       //catch gets called in case of errors
                alert(err.response.statusText + " " + err.response.status + " " + err.response.data);
        });
        
        setUsername('');
        setImageUrl('');
        setCaption('');
    }



    return (
    //Rendering the form template 
    <div>    
        <form>
            <div className="form-group">
                <label>Username</label>
                <input value= {username} onChange= {e => setUsername(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username"/>
            </div>
            <div class="form-group">
                <label>Caption</label>
                <input value= {caption} onChange= {e => setCaption(e.target.value)} type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter caption"/>
            </div>
            <div class="form-group">
                <label>Image URL</label>
                <input value= {imageUrl} onChange= {e => setImageUrl(e.target.value)} type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter image url" required/>
            </div>
            
            <button type="submit" class="btn btn-primary" onClick= {postMeme}>Submit</button>
        </form>
    </div>    
    )
}

export default CreateMeme
