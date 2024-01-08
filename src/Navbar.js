import React from "react"
import "./styles.css"

export default function Navbar() {
    return(
        <div className="navbar">
            <div className="logo">
                <img src="https://fnpersona.netlify.app/fn_logo.png"/>
                <span>FnPersona</span>
            </div>
            <div className="contact">
                <button className="btn">Babylon</button>
                <img src="https://cdn-icons-png.flaticon.com/128/9581/9581121.png" />
            </div>
        </div>
    )
}