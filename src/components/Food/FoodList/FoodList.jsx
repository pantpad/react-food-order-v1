import { useFetch } from "../../../hooks/useFetch";
import { fetchMeals } from "../../../http";

import { useContext } from "react";
import { foodContext } from "../../../store/food-context";

import FoodItem from "./FoodItem/FoodItem";

export default function FoodList() {
  const { addItemToCart } = useContext(foodContext);
  const { data: meals, error, isFetching } = useFetch(fetchMeals, []);

  if (isFetching) return <p>Loading data . . .</p>;

  if (error) return <p>Error! {error}</p>;

  //console.log("FoodList");
  return (
    <>
      <section
        id="food-list"
        className="grid grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] gap-4"
      >
        {meals.map((meal) => (
          <FoodItem key={meal.id} {...meal} onAdd={() => addItemToCart(meal)} />
        ))}
      </section>
    </>
  );
}
