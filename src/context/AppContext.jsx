import { createContext, useEffect, useState } from "react";

export const appContext = createContext();

const AppContextProvider = ({ children }) => {
  const foodList = [
    {
      _id: "1",
      name: "vegetable salad",
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      price: 12,
      description: "test",
      category: "salad",
    },
    {
      _id: "2",
      name: "fruit ",
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      price: 12,
      description: "test",
      category: "fruit",
    },
    {
      _id: "3",
      name: "meat sandwitch",
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      price: 12,
      description: "test",
      category: "sandwitch",
    },
  ];

  const currency = "LKR";

  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const useCart = () => {
    return {
      totalItems: 0,
    };
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const appValues = {
    useCart,
    foodList,
    currency,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
  };
  return (
    <appContext.Provider value={appValues}>{children}</appContext.Provider>
  );
};

export default AppContextProvider;
