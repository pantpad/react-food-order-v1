import { useContext } from "react";
import { foodContext } from "../../store/food-context";

export default function CartActionButton({ id, name, price }) {
  console.log("button " + name);
  const { addItemToCart } = useContext(foodContext);
  return (
    <>
      <button className="button" onClick={() => addItemToCart(id, name, price)}>
        Add to Cart
      </button>
    </>
  );
}
