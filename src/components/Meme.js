import React from "react";
import memesData from "../memesData"


export default function Meme() {
    const [memeUrl, setMemeUrl] = React.useState("")

    function getRandomMeme() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeUrl(memesArray[randomNumber].url)
        
    }
    return (
        <main>
            <div className="form">
                <input type="text" className="form--input" placeholder="Top text" />
                <input type="text" className="form--input" placeholder="Bottom text" />
                <button className="form--button" onClick={getRandomMeme}>Get a new meme image  🖼</button>
            </div>
            
                <img src={memeUrl} className="meme" />
            
            
        </main>
    )
}