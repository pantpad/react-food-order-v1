import { useState, createContext } from "react";

export const foodContext = createContext({
  cart: [],
  orders: [],
  isCartEmpty: null,
  addItemToCart: () => {},
  cartLength: null,
});

export default function FoodContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  //const [meals, setMeals] = useState([]);
  const [orders, setOrders] = useState([]);

  function createCartItem(meal) {
    return {
      id: meal.id,
      name: meal.name,
      price: meal.price,
      quantity: 1,
    };
  }

  function findItemIndex(lookUpID) {
    const itemIndex = cart.findIndex((item) => item.id === lookUpID);
    return itemIndex;
  }

  function getCartLength() {
    let length = cart.reduce((acc, item) => {
      return item.quantity + acc;
    }, 0);
    return length;
  }

  function addItemToCart(meal) {
    //cerco se meal esiste dentro cart
    const itemIndex = findItemIndex(meal.id);
    if (itemIndex > -1) {
      //prendo meal, lo copio e aggiorno la quantita'
      const mealToUpdate = {
        ...cart[itemIndex],
        quantity: cart[itemIndex].quantity + 1,
      };
      //copio tutto il carrello, sostituisco il meal esistente
      const updatedMeals = [...cart];
      updatedMeals[itemIndex] = mealToUpdate;

      //aggiorno il carrello
      setCart(updatedMeals);
    } else {
      //creo nuovo item, lo aggiungo in coda
      const cartItem = createCartItem(meal);
      setCart((prev) => [...prev, cartItem]);
    }
  }

  const foodCtx = {
    cart: cart,
    orders: orders,
    addItemToCart: addItemToCart,
    isCartEmpty: cart.length < 1,
    cartLength: getCartLength(),
  };
  return (
    <foodContext.Provider value={foodCtx}>{children}</foodContext.Provider>
  );
}
