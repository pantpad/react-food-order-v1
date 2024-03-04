import FoodItem from "./FoodItem/FoodItem";

export default function FoodList() {
  return (
    <>
      <section id="food-list" className="grid grid-cols-3 gap-4">
        <FoodItem />
      </section>
    </>
  );
}
