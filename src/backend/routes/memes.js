const router = require('express').Router();
const { Meme } = require('../models/meme-model');
//Module for validating image url
const imageValidator = require('image-url-validator').default;

//Handling get all memes request
router.get('/memes',async(req,res) => {
    try {
        //Latest 100 memes were picked from the DB.
        const memes = await Meme.find().
        sort('-createdAt'). //Sorted in the decreased order of created time
        limit(100); //Picked the first 100
        res.json(memes);
    } catch (err) {
        // In case of any error
        res.status(404).json('Error: ' + err);
    }    
});


//Handling post request
router.post('/memes',async(req,res) => {

    try{
        const username = req.body.username;
        const caption = req.body.caption;
        const imageUrl = req.body.imageUrl;

        //Validating whether the url contains an image or not
        const trueImg = await imageValidator(imageUrl);
        //If user entered the wrong text, it is considered as Bad request.
        if(!trueImg && imageUrl != '') {
            return res.status(400).json("URL doesn't have image");
        }

        //Checking if the request body already exists in the DB.
        const duplicateMeme = await Meme.findOne({
            username : req.body.username,
            caption : req.body.caption,
            imageUrl : req.body.imageUrl
        });

        //If the request body is duplicate, conflict response status code is sent.
        if(duplicateMeme != undefined) {
            return res.status(409).json("Duplicate request");
        }

        
        let newMeme = new Meme({
            username,
            caption,
            imageUrl
        });
        // If there are no other problems, the request body is successfully saved in the DB.
        newMeme = await newMeme.save();
        res.json("Meme added");
    } catch (err) {
        //For any other errors like incomplete request, it is considered as bad request.
        res.status(400).json('Error: ' + err.message);
    }
});

//Handling get meme object by id request
router.get('/memes/:id',async (req,res) => {
    
    try{
        //Finding the Meme object with this ID.
        const meme = await Meme.findById(req.params.id);
        res.json(meme);
    }
    catch(err){
        // If meme object is not found
        res.status(404).json('Error: Image not found with this ID');
    }

});


module.exports = router;