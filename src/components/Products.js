import React ,{useState,useEffect} from 'react'
import {connect} from "react-redux"
// import { Data } from "./Data";
import {getItems,AddToCart,bannerClose} from "./actions/itemActions"
import Product from "./Product"
import "./Products.css"

function Products(props) {
    // const [state,setState]=useState(Data);
    useEffect(() => {
        props.getItems();
    }, [])
    const {items}=props.item
    // console.log(items)

    //add to cart
    const AddToCart=(id)=>{
        props.AddToCart(id)
        setTimeout(()=>{
            props.bannerClose()
        },2000)
       
    }

    return (
        <div className="products">
             <div className="inside-container">
                <h3>Products</h3>
                <div className="products-center">
                    {items.map(product=> <Product key={product._id} data={product}
                    AddToCart={()=>AddToCart(product._id)} isInCart={product.isInCart}
                    />)}
                </div>
             </div>
           
        </div>
    )
}

const mapStateToProps=state=>({
    item:state.item
})

export default connect(mapStateToProps,{getItems,AddToCart,bannerClose})(Products)
