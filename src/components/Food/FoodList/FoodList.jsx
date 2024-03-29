import { useFetch } from "../../../hooks/useFetch";
import { fetchMeals } from "../../../http";

import { memo } from "react";

import FoodItem from "./FoodItem/FoodItem";
import FoodItemSkeleton from "./FoodItem/FoodItemSkeleton";

export default memo(function FoodList() {
  const { data: meals, error, isFetching } = useFetch(fetchMeals, []);

  let skeletonSection = Array.from(Array(10), (_, i) => (
    <FoodItemSkeleton key={i} />
  ));

  if (error) return <p>{error.message} meals</p>;

  console.log("FoodList");
  return (
    <>
      <section
        id="food-list"
        className="grid grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] gap-4"
      >
        {isFetching
          ? skeletonSection
          : meals.map((meal) => <FoodItem key={meal.id} {...meal} />)}
        //children
      </section>
    </>
  );
});
