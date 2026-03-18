import { createContext } from "react";

export const appContext = createContext();

const AppContextProvider = ({ children }) => {
  const useCart = () => {
    // Dummy cart data
    return {
      totalItems: 0,
    };
  };
  const appValues = { useCart };
  return (
    <appContext.Provider value={appValues}>{children}</appContext.Provider>
  );
};

export default AppContextProvider;
