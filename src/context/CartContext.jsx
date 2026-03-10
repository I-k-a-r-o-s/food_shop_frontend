import { createContext } from "react";

export const cartContext = createContext();

const CartContextProvider = ({ children }) => {
  const useCart = () => {
    // Dummy cart data
    return {
      totalItems: 0,
    };
  };
  const cartValues = { useCart };
  return (
    <cartContext.Provider value={cartValues}>{children}</cartContext.Provider>
  );
};

export default CartContextProvider;
