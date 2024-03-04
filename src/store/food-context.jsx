import { useState, createContext } from "react";

export const foodContext = createContext({
  cart: [],
  orders: [],
  isCartEmpty: null,
  addItemToCart: () => {},
});

export default function FoodContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [meals, setMeals] = useState([]);
  const [orders, setOrders] = useState([]);

  function createCartItem(meal) {
    return {
      id: meal.id,
      name: meal.name,
      price: meal.price,
      quantity: 1,
    };
  }

  function addItemToCart(meal) {
    const cartItem = createCartItem(meal);
    setCart((prev) => [...prev, cartItem]);
  }

  const foodCtx = {
    cart: cart,
    orders: orders,
    addItemToCart: addItemToCart,
    isCartEmpty: cart.length < 1,
  };
  return (
    <foodContext.Provider value={foodCtx}>{children}</foodContext.Provider>
  );
}
