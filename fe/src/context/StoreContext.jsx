import { createContext, useEffect, useState } from "react";
import axios from 'axios'


export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [basketItems, setBasketItems] = useState({});
    const url = "http://localhost:4000";
    const [token, setToken] = useState("");
    const [product_list, setProductList] = useState([]);

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

    
    const fetchProductList = async () => {
        const response = await axios.get(url + "/api/products/product_list");
        setProductList(response.data.data)
    }


    //localStorage data is saved in token state when page refreshed
    useEffect(() => {
        
        async function loadProductData() {
            await fetchProductList();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"))
            }
        }
        loadProductData();
    },[])
         
    const contextValue = {
        product_list,
        basketItems,
        setBasketItems,
        addToBasket,
        removeFromBasket,
        getBasketTotal,
        url,
        token,
        setToken
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;