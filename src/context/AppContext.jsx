import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";

export const appContext = createContext();

const AppContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const [itemCount, setItemCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  //const [foodList, setFoodList] = useState([]);

  const [token, setToken] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    //withCredentials: true,
  });

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

  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if (token) {
      await api.post("/api/cart/add", { itemId }, { headers: { token } });
    }
    setItemCount((prev) => prev + 1);
  };

  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (token) {
      await api.post("/api/cart/remove", { itemId }, { headers: { token } });
    }
    setItemCount((prev) => prev - 1);
  };

  const loadCartData = async (token) => {
    const response = await api.get("/api/cart/get", { headers: { token } });
    setCartItems(response.data.cartData);

    // Calculate and update item count
    let count = 0;
    for (let itemId in response.data.cartData) {
      count += response.data.cartData[itemId];
    }
    setItemCount(count);
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

  {
    /**const fetchFood = async () => {
    const response = await api.get("/api/food/list");
    setFoodList(response.data.data);
  };

  const loadData = async () => {
    await fetchFood();
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      loadCartData(localStorage.getItem("token"))
    }
  }; */
  }

  useEffect(() => {
    //loadData();
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      loadCartData(localStorage.getItem("token"));
    }
  }, []);

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
    navigate,
    api,
    loading,
    setLoading,
    token,
    setToken,
    showPassword,
    setShowPassword,
    location,
  };
  return (
    <appContext.Provider value={appValues}>{children}</appContext.Provider>
  );
};

export default AppContextProvider;
