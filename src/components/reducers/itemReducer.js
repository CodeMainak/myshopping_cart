import {GET_ITEMS,ADD_ITEMS,DELETE_ITEM,TOGGLE_NAV,CLOSE_NAVBAR,BANNER_CLOSE,
    INCREASE_ITEM,DECREASE_ITEM,TOTAL_ITEMS,DETAILS} from "../actions/types";

const initialState={
    items:[
        {
            _id:1,
            img:'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1611072552-bean-1611072543.jpg?crop=1xw:1xh;center,top&resize=480:*',
            title:'Denim Shirt Men 2018',
            price:'1,295',
            details:'Denim Shirt Men 2018 Long Sleeve Men Casual Cotton Jeans Shirt Slim Suede Matching Mens Solid Pocket Shirts Tops Chemise Homme',
            count:1,
            isInCart:false
    
        },
    
        {
            _id:2,
            img:'https://m.media-amazon.com/images/I/61kwbxcaVjL._UL1445_.jpg',
            title:'OORA Men"s Waistcoat',
            price:'949',
            details:'Care Instructions: Dry Clean Only.Fit Type: Regular 5 Button Waist-Coat only. Shirt / Pocket Square Not Included. Color of Button may change.Fit Type: Slim.Pattern: Solid.Do not wash, Dry Clean only. The images represent actual product though color of the image and product may slightly differ because of Studio light effect and monitor setting.',
            count:1,
            isInCart:false
    
        },
    
        {
            _id:3,
            img:'https://img10.joybuy.com/N0/s560x560_jfs/t1/123893/9/2992/150587/5ecc839cE2a5ed5e8/4c88b96046d59f3b.jpg.dpg',
            title:'Ripped Jeans Pants',
            price:'999',
            details:'Men Stylish Ripped Jeans Pants Biker Skinny Slim Straight Frayed Denim Trousers Fashion Skinny Jeans Men Clothes',
            count:1,
            isInCart:false
    
        },
    
        {
            _id:4,
            img:'https://www.redwolf.in/image/catalog/mens-t-shirts/full-sleeves/batman-emblem-full-sleeve-t-shirt-india.jpg',
            title:'FULL SLEEVE T-SHIRT',
            price:'599',
            details:'Batman Emblem Full Sleeve T-shirt | Official Batman Full Sleeve T-shirts | Redwolf',
            count:1,
            isInCart:false
    
        },
    
        {
            _id:5,
            img:'https://5.imimg.com/data5/IZ/IZ/WY/SELLER-85713121/white-girls-t-shirts-500x500.jpg',
            title:'Cotton Girls T Shirts',
            price:'440',
            details:'TEEn Cotton White Girls T Shirts, Size: M To Xl, Age Group: 15-35,| ID: 20908002933',
            count:1,
            isInCart:false
    
        },
    
        {
            _id:6,
            img:'https://assetscdn1.paytm.com/images/catalog/product/K/KI/KIDTALES-STORIETALE27188E794C6A6/1615208685970_0..jpg',
            title:'Girls" Jeans',
            price:'899',
            details:'Girls" Jeans – Buy Girls Jeans Online at Best Price in India',
            count:1,
            isInCart:false
    
        },
    
        {
            _id:7,
            img:'https://rukminim1.flixcart.com/image/800/960/kk5rgy80/dress/s/3/o/xl-cd01-edgydeal-original-imafzkh82rztyw2h.jpeg?q=50',
            title:'Women Multicolor Dress',
            price:'393',
            details:'Women Fit and Flare Multicolor Dress',
            count:1,
            isInCart:false
    
        },
    
        {
            _id:8,
            img:'https://5.imimg.com/data5/NO/TW/MY-10240521/ladies-denim-jeans-500x500.jpg',
            title:'Ladies Denim Jeans',
            price:'490',
            details:'Suko Jeans Black Ladies Denim Jeans, Rs 290 /piece Palaeo Enterprises | ID: 20135724712',
            count:1,
            isInCart:false
    
        }
    ],
    cart:[],
    isOpen:false,
    total:0,
    shipping:10
}

const Todos=(state=initialState,action)=>{
    switch(action.type){
        //To get initial State
        case GET_ITEMS:
            return{
                ...state
            }
        //To toggle Navigation for appearing
        case TOGGLE_NAV:
            return{
                ...state,
                isOpen:!state.isOpen
            }
        //To close Navbar if it's open
        case CLOSE_NAVBAR:
            if(state.isOpen===true){
            return{
                ...state,
                isOpen:false
            }
        }
        //add item to cart
        case ADD_ITEMS:
            let check=state.cart.find(item=>item._id===action.payload)
            if(!check){
            //bringing only the it's matched id
                let items=state.items.filter(item=>item._id===action.payload)
                let itemsCart=[...state.cart,...items]
                return {
                    ...state,
                    cart:itemsCart
                }
            }
            else{
                let items=state.items.filter(item=>item._id===action.payload)
                items.forEach(item=>item.isInCart=true)
                return{
                    ...state
                }
            }
        //For closing banner after specific time.
        case BANNER_CLOSE:
            state.items.forEach(item=>{
                item.isInCart=false
            })
            return {
                ...state,
            }

        //Delete item from cart
        case DELETE_ITEM:
            return{
                ...state,
                cart:state.cart.filter(item=>item._id!==action.payload)
            }

        //To increase item inside a cart
        case INCREASE_ITEM:
            let incResults=state.cart.map(item=>{
                if(item._id===action.payload){
                    item={...item,count:item.count+1}
                }
                return item
            })
            return {
                ...state,
                cart:incResults
            }
        //To decrease item inside a cart
        case DECREASE_ITEM:
            let decResults=state.cart.map(item=>{
                if(item._id===action.payload){
                    item={...item,count:item.count===1?1:item.count-1}
                }
                return item
            })
            return{
                ...state,
                cart:decResults
            }
            //To get total price
        case TOTAL_ITEMS:
            const totals=state.cart.reduce((prev,item)=>{
                return prev+item.price*item.count
            },0)
            return {
                ...state,
                total:totals
            }
        case DETAILS:
            return{
                ...state,
                
            }
        default:return state
    }
}

export default Todos

