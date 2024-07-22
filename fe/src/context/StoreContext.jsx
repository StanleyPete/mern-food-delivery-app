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
    
    useEffect(()=>{
        console.log(basketItems);
    }, [basketItems])
         
    const contextValue = {
        product_list,
        basketItems,
        setBasketItems,
        addToBasket,
        removeFromBasket,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;