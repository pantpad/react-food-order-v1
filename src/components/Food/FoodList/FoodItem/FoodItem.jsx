import { memo } from "react";

const FoodItem = memo(function FoodItem({
  id,
  name,
  price,
  description,
  image,
  onAdd,
}) {
  console.log("FoodItem " + name);
  return (
    <>
      <article className="rounded-xl bg-black/30">
        <div className="flex h-full flex-col justify-start">
          <img
            src={`../../../../../backend/public/${image}`}
            alt={name}
            className="w-full rounded-xl rounded-b-none"
          />
          <div className="flex h-full flex-col justify-between p-4">
            <h1 className="text-xl">{name}</h1>
            <button>${price}</button>
            <p className="mb-4 text-pretty">{description}</p>
            <button className="button" onClick={() => onAdd(id, name, price)}>
              Add to Cart
            </button>
          </div>
        </div>
      </article>
    </>
  );
});

export default FoodItem;
