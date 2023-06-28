import { createContext, useState } from 'react';
import '../styles/styles.scss';
import { AppProvider } from 'Context/ProductContext';

export const CartContext = createContext();
const MyApp = ({ Component, pageProps }) => {
  const [cart, setCart] = useState([]);
  return (
    <AppProvider>
    <CartContext.Provider value={{ cart, setCart }}>
      <Component {...pageProps} />
    </CartContext.Provider>
    </AppProvider>
  );
};

export default MyApp;
