import React from 'react'
import BackImg from "./../images/img8.jpg"
import Products from "./Products"
import "./Home.css"
function Home() {
    return (
        <>
            <div className="home" style={{backgroundImage:`url(${BackImg})`}}>
            <div className="banner">
                <h1>Welcome to our store</h1>
            </div>
            </div>
            <Products/>
        </>
    )
}

export default Home