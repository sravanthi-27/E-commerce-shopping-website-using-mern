import React, { useEffect, useState, createContext } from "react";

// Generate default cart object with 0 quantity for 0–300 items
const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index <= 300; index++) {
        cart[index] = 0;
    }
    return cart;
};

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const [all_product, setAll_Product] = useState([]);
    const [cartItems, setCartItems] = useState(null); // use null to detect "not loaded"

    // 🔁 Fetch products and cart on initial load
    useEffect(() => {
        fetch('http://localhost:4000/allproducts')
            .then((response) => response.json())
            .then((data) => setAll_Product(data));

        fetchCart(); // ⬅️ call on load
    }, []);

    // ✅ Reusable function to fetch cart (also used after login)
    const fetchCart = () => {
        const token = localStorage.getItem('auth-token');
        if (token) {
            fetch('http://localhost:4000/getcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'auth-token': token,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({}), // needed even if empty
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("✅ Cart loaded from backend:", data);
                    setCartItems(data);
                })
                .catch((error) => {
                    console.error("❌ Failed to fetch cart, using default:", error);
                    setCartItems(getDefaultCart());
                });
        } else {
            setCartItems(getDefaultCart());
        }
    };

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));

        const token = localStorage.getItem('auth-token');
        if (token) {
            fetch('http://localhost:4000/addtocart', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'auth-token': token,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ itemId }),
            })
                .then((response) => response.json())
                .then((data) => console.log("✅ Added to cart:", data))
                .catch((error) => console.error("❌ Add to cart failed:", error));
        }
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));

        const token = localStorage.getItem('auth-token');
        if (token) {
            fetch('http://localhost:4000/removefromcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'auth-token': token,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ itemId }),
            })
                .then((response) => response.json())
                .then((data) => console.log("✅ Removed from cart:", data))
                .catch((error) => console.error("❌ Remove from cart failed:", error));
        }
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        if (!cartItems) return 0;

        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                const itemInfo = all_product.find(product => product.id === Number(item));
                if (itemInfo) {
                    totalAmount += itemInfo.new_price * cartItems[item];
                }
            }
        }
        return totalAmount;
    };

    const getTotalCartItems = () => {
        let totalItem = 0;
        if (!cartItems) return 0;

        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    };

    // ✅ Final context value
    const contextValue = {
        getTotalCartItems,
        getTotalCartAmount,
        all_product,
        cartItems,
        addToCart,
        removeFromCart,
        fetchCart, // 👈 used after login
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
