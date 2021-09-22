import {GET_ITEMS,ADD_ITEMS,DELETE_ITEM,TOGGLE_NAV,CLOSE_NAVBAR,BANNER_CLOSE,
    INCREASE_ITEM,DECREASE_ITEM,TOTAL_ITEMS,DETAILS} from "./types";

//To initially render items;
export const getItems=()=>{
    return {
        type:GET_ITEMS
    }
}
//To close NavBar if it's open;
export const toggleNav=()=>dispatch=>{
    console.log('Clicked');
    dispatch({
        type:TOGGLE_NAV
    })
}
//To close Navbar if it's open
export const closeNavBar=()=>dispatch=>{
    console.log('Closed becoz is was open');
    dispatch({
        type:CLOSE_NAVBAR
    })
}
//For adding items to cart.
export const AddToCart=(id)=>dispatch=>{
    dispatch({
        type:ADD_ITEMS,
        payload:id
    })
}

//To close banner
export const bannerClose=()=>dispatch=>{
    dispatch({
        type:BANNER_CLOSE
    
    })
}
//To delete the items from cart
export const deleteItem=(id)=>dispatch=>{
    dispatch({
        type:DELETE_ITEM,
        payload:id
    })
}
//To increase item inside cart
export const increaseItem=(id)=>dispatch=>{
    console.log(`Increased item ${id}`)
    dispatch({
        type:INCREASE_ITEM,
        payload:id
    })
}
//To decrease item inside cart
export const decreaseItem=(id)=>dispatch=>{
    console.log(`Decrease item ${id}`)
    dispatch({
        type:DECREASE_ITEM,
        payload:id
    })
}

//To get the total price of the item inside the cart.
export const getTotals=()=>dispatch=>{
    dispatch({
        type:TOTAL_ITEMS,
    })
}
//To get Details
export const getDetails=()=>dispatch=>{
    dispatch({
        type:DETAILS,
    })
}