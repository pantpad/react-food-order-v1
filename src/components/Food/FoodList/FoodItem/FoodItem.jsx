import { memo } from "react";

import CartActionButton from "../../../Cart/CartActionButton";

const FoodItem = memo(function FoodItem({
  id,
  name,
  price,
  description,
  image,
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
            <CartActionButton id={id} name={name} price={price} />
          </div>
        </div>
      </article>
    </>
  );
});

export default FoodItem;
