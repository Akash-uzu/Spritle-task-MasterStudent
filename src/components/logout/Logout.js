import React from "react";
import "./logout.css"
export default function Logout(){

    const logouthandler = () => {
        localStorage.removeItem("role")
        localStorage.removeItem("username")

        window.location.href="/"
        
    }

    return(
        <>
        <button onClick={logouthandler}>Logout</button>
        </>
    )
}