import React from 'react'
import {Link} from "react-router-dom"
const Product = (props) => {
    const {data,AddToCart,isInCart}=props
    return (
        <div className="product">
            <div className="box-img">
                <Link to={`/details/${data._id}`}>
                    <img src={data.img} alt="product"/>
                </Link>
            </div>
            <div className="product-details">
                <h3>{data.title}</h3>
                <h4>₹{data.price}</h4>
            </div>
            <div className="product-btn">
                <button onClick={AddToCart}>Add to cart</button>
            </div>
            <div className={isInCart? "inCart newInCart":"inCart"}>
                <span>Already in cart</span>
            </div>
        </div>
    )
}

export default Product
