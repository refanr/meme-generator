import React from "react";
import troll from "../images/troll.png"

export default function Navbar() {
    return (
        <nav>
            <img src={troll} alt="" className="nav--troll" />
            <h2 className="nav--title">Meme Generator</h2>
            <p className="nav--info">React Course - Project 3</p>
        </nav>

    )
}