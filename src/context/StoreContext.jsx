import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState({});
    const [filteredItems, setFilteredItems] = useState(food_list);
    // const [searchQuery,setSearchQuery] = useState('');

    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        }
        else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }

    const getCartTotal = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            //*** item id h cartItems m ***/
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * cartItems[item]
            }
        }
        return totalAmount;
    }

    const filterItems = (minPrice, maxPrice) => {
        let filtered;
        if (minPrice === '' && maxPrice === '') {
            filtered = food_list; // No filters applied, show all items
        } else {
            filtered = food_list.filter(item => {
                return (minPrice === '' || item.price >= minPrice) &&
                    (maxPrice === '' || item.price <= maxPrice);
            });
        }
        setFilteredItems(filtered);
    };

    const clearFilter = () => {
        setFilteredItems(food_list);
    }

    const search = (itemName) =>{
        let filtered;
        if(itemName === ''){
            filtered = food_list;
        }
        else{
            filtered = food_list.filter((item) => item.name.toLowerCase() === itemName.toLowerCase());
        }
        setFilteredItems(filtered);
    }

    const contextValue = {
        food_list, cartItems, setCartItems, addToCart, removeFromCart, getCartTotal, filterItems, filteredItems, clearFilter, search
    }



    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    )

}

export default StoreContextProvider;