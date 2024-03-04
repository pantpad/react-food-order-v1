import Header from "./components/Header/Header";
import PageLayout from "./layout/PageLayout";
import FoodList from "./components/Food/FoodList/FoodList";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    setCart((prev) => [...prev, item]);
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
