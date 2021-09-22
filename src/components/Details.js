import React ,{useEffect}from 'react'
import {useParams,Link} from "react-router-dom"
import "./Details.css"
// import {Data} from "./Data"
import { connect } from 'react-redux'
import { AddToCart, getDetails,getItems } from './actions/itemActions'
const Details = (props) => {

    
    useEffect(() => {
        props.getItems()
    }, [])

    const  {id}=useParams()
    let detailProducts=props.item.items.find((item)=>item._id===parseInt(id))
    return (
        <div className="details">
            {/* {detailProducts.title} */}
            <div className="inside-container">
                <h3>Product Deatils</h3>
                <div className="details-center">
                    <div className="details-img">
                        <img src={detailProducts.img}  alt="product"/>
                    </div>
                    <div className="details-info">
                        <h4 className="details-title">
                            {detailProducts.title}
                        </h4>
                        <p className="details-text-info">
                            {detailProducts.details}
                        </p>
                        <p className="details-price">
                            price: <span>₹{detailProducts.price}</span>
                        </p>
                        <div className="details-btn">
                            <Link to="/products"><button>Back to products</button></Link>
                            <button onClick={()=>props.AddToCart(detailProducts._id)}>Add to Cart</button>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps=state=>({
    item:state.item
})

export default connect(mapStateToProps,{getDetails,AddToCart,getItems}) (Details)
