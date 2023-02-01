import React from "react";

export default function Logout(){

    const logouthandler = () => {
        localStorage.removeItem("role")
        window.location.href="/"
        
    }

    return(
        <>
        <button onClick={logouthandler}>Logout</button>
        </>
    )
}