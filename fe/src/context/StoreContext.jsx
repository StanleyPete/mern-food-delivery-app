import { createContext, useEffect, useState } from "react";
import { product_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [basketItems, setBasketItems] = useState({});

    const addToBasket = (itemId) => {
        if(!basketItems[itemId]){
            setBasketItems((prev)=>({...prev,[itemId]:1}));
        }else{
            setBasketItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        }
    }

    const removeFromBasket = (itemId) => {
        setBasketItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
    }
    
    const getBasketTotal = () => {
        let total = 0;
        for(const item in basketItems){
            if(basketItems[item]>0){
                let itemInfo = product_list.find((product)=>product._id === item);
                total += itemInfo.price*basketItems[item];
            }
        }
        return total;
    }
         
    const contextValue = {
        product_list,
        basketItems,
        setBasketItems,
        addToBasket,
        removeFromBasket,
        getBasketTotal
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;