import Header from "./components/Header/Header";
import PageLayout from "./layout/PageLayout";
import FoodList from "./components/Food/FoodList/FoodList";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(meal) {
    //creazione cartItem
    const cartItem = {
      id: meal.id,
      name: meal.name,
      price: meal.price,
      quantity: 1,
    };

    setCart((prev) => [...prev, cartItem]);
  }

  return (
    <>
      <Header cart={cart} />
      <PageLayout className={"w-[min(65rem,100vw-4rem)]"}>
        <FoodList onAdd={addToCart} />
      </PageLayout>
    </>
  );
}

export default App;
