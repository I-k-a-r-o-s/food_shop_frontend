import { createContext, useState } from "react";
import { useNavigate } from "react-router";

export const appContext = createContext();

const AppContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const [itemCount, setItemCount] = useState(0);

  const navigate = useNavigate();

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
      price: 90,
      description: "test",
      category: "fruit",
    },
    {
      _id: "3",
      name: "meat sandwitch",
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      price: 55,
      description: "test",
      category: "sandwitch",
    },
  ];

  const currency = "LKR";
  const deliveryFee = 5;

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    setItemCount((prev) => prev + 1);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    setItemCount((prev) => prev - 1);
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    let item = 0;
    for (item in cartItems) {
      let itemInfo = foodList.find((product) => product._id === item);
      totalAmount += itemInfo.price * cartItems[item];
    }
    return totalAmount;
  };

  const appValues = {
    foodList,
    currency,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    deliveryFee,
    itemCount,
    navigate
  };
  return (
    <appContext.Provider value={appValues}>{children}</appContext.Provider>
  );
};

export default AppContextProvider;
