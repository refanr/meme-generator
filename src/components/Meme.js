import React from "react";
import memesData from "../memesData"


export default function Meme() {
    //const [memeUrl, setMemeUrl] = React.useState("https://i.imgflip.com/8p0a.jpg")
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/8p0a.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getRandomMeme() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage:  url
        }))
        
    }
    return (
        <main>
            <div className="form">
                <input type="text" className="form--input" placeholder="Top text" />
                <input type="text" className="form--input" placeholder="Bottom text" />
                <button className="form--button" onClick={getRandomMeme}>Get a new meme image  🖼</button>
            </div>
            
                <img src={meme.randomImage} className="meme" alt="Random meme" />
            
            
        </main>
    )
}