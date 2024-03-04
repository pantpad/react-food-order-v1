import Header from "./components/Header/Header";
import PageLayout from "./layout/PageLayout";
import FoodList from "./components/Food/FoodList/FoodList";

import { useState, useEffect } from "react";

function App() {
  const [food, setFood] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <>
      <Header />
      <PageLayout className={"w-[min(65rem,100vw-2rem)] border border-red-100"}>
        <FoodList />
      </PageLayout>
    </>
  );
}

export default App;
