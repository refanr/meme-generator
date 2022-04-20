import React from "react";
import memesData from "../memesData"


export default function Meme() {
    const [memeUrl, setMemeUrl] = React.useState(memesData.data.memes[0].url)

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
            <div className="meme">
                <img src={memeUrl} alt="Random meme" />
            </div>
            
        </main>
    )
}