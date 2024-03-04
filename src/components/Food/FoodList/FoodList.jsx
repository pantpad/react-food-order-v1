import { fetchMeals } from "../../../http";
import { useState, useEffect } from "react";

import FoodItem from "./FoodItem/FoodItem";

export default function FoodList() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const mealsData = await fetchMeals();
        setMeals(mealsData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  if (isLoading) return <p>Loading data . . .</p>;

  if (error) return <p>Error! {error}</p>;

  return (
    <>
      <section
        id="food-list"
        className="grid grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] gap-4"
      >
        {meals.map((meal) => (
          <FoodItem key={meal.id} {...meal} />
        ))}
      </section>
    </>
  );
}
