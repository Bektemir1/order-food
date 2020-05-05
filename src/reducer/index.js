import {ADD, REMOVE} from "../action/index";


let initialState = {
    menuList: [
        {fooditem: "Hamburger", price: 12.00},
        {fooditem: "Dodo Pizza", price: 27.00},
        {fooditem: "Coffee", price: 16.00},
        {fooditem: "Milk with sugar", price: 10.00},
        {fooditem: "Bruschetta", price: 10.00},
        {fooditem: "Tiramisu", price: 6.00}
    ],
    cart: [],
    total: [{totalvalue:0}]
};

const foodsListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD :
            let alreadyInCart = false;
            if(state.cart.length>0) {
                state.cart = state.cart.map((cartitem) => {
                   if (cartitem.fooditem===action.item.fooditem) {
                        cartitem.numberOfFoods+=1;
                        alreadyInCart=true;
                    }
                    return cartitem;
                });
            }

            if(!alreadyInCart){

                state.cart.push({
                    fooditem: action.item.fooditem,
                    price: action.item.price,
                    numberOfFoods: 1
                });
            }

            updateTotal(state);
              return {
                ...state,
                [action.cart] : state.cart
            };

        case REMOVE :
           let index=-1;
            
            state.cart.map((cartItem) => {
                if(cartItem.fooditem===action.item.fooditem){
                    
                    while(cartItem.numberOfFoods>1){
                         cartItem = cartItem.numberOfFoods -= 1;

                    }
                   
                    index = state.cart.indexOf(cartItem)
             
              }

                  
                return index;
            });
            if(index!==-1) {
                 
                state.cart.splice(index,1);

              
              
             
            }
            updateTotal(state);
           return {
                ...state,
                [action.cart] : state.cart
            };
        default :
            return state;
    }
};


export function updateTotal(state) {
    if(state.cart.length>0) {
        let total=0;
        state.cart.every((cartitem)=> {
            total+= (cartitem.price*cartitem.numberOfFoods);
            return total;
        });
        state.total.totalvalue = total;
    }
    else{
        state.total.totalvalue = 0;
    }
    return state;
}

export default foodsListReducer;