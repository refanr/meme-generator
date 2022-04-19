import React from "react";
import memesData from "../memesData"


export default function Meme(props) {
    function getRandomMeme() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const {url} = memesArray[randomNumber]
        window.alert(url)
    }
    return (
        <main>
            <div className="form">
                <input type="text" className="form--input" placeholder="Top text" />
                <input type="text" className="form--input" placeholder="Bottom text" />
                <button className="form--button" onClick={getRandomMeme}>Get a new meme image  🖼</button>
            </div>
            
        </main>
    )
}