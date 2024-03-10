import { useState, createContext, useMemo, useCallback } from "react";

export const foodContext = createContext({
  cart: [],
  orders: [],
  isCartEmpty: null,
  addItemToCart: () => {},
  cartLength: null,
  cartTotal: null,
  increaseItemQuantity: () => {},
  decreaseItemQuantity: () => {},
  clearCart: () => {},
});

export default function FoodContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  const findItemIndex = useCallback(
    function findItemIndex(lookUpID) {
      const itemIndex = cart.findIndex((item) => item.id === lookUpID);
      return itemIndex;
    },
    [cart],
  );

  function getCartLength() {
    let length = cart.reduce((acc, item) => {
      return item.quantity + acc;
    }, 0);
    return length;
  }

  function getCartTotal() {
    let total = cart.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    return total.toFixed(2);
  }

  const addItemToCart = useCallback(
    function addItemToCart(id, name, price) {
      //cerco se meal esiste dentro cart
      const itemIndex = findItemIndex(id);
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
        const cartItem = { id: id, name: name, price: price, quantity: 1 };
        setCart((prev) => [...prev, cartItem]);
      }
    },
    [cart],
  );

  function increaseItemQuantity(meal) {
    const itemIndex = findItemIndex(meal.id);
    const mealToUpdate = {
      ...cart[itemIndex],
      quantity: cart[itemIndex].quantity + 1,
    };
    const updatedItems = [...cart];
    updatedItems[itemIndex] = mealToUpdate;
    setCart(updatedItems);
  }

  function decreaseItemQuantity(meal) {
    const itemIndex = findItemIndex(meal.id);
    const mealToUpdate = {
      ...cart[itemIndex],
      quantity: cart[itemIndex].quantity - 1,
    };
    const updatedItems = [...cart];
    if (mealToUpdate.quantity < 1) {
      updatedItems.splice(itemIndex, 1);
    } else {
      updatedItems[itemIndex] = mealToUpdate;
    }

    setCart(updatedItems);
  }

  function clearCart() {
    setCart([]);
  }

  const foodCtx = {
    cart: cart,
    addItemToCart,
    isCartEmpty: cart.length < 1,
    cartLength: getCartLength(),
    cartTotal: getCartTotal(),
    increaseItemQuantity,
    decreaseItemQuantity,
    clearCart,
  };
  return (
    <foodContext.Provider value={foodCtx}>{children}</foodContext.Provider>
  );
}
