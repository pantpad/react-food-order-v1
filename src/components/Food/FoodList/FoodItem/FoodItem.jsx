export default function FoodItem() {
  return (
    <>
      <article className="bg-black/30">
        <div>
          <img src={""} alt="" className="w-full" />
          <h1>Mac & Cheese</h1>
          <button>$8.99</button>
          <p>
            Creamy cheddar cheese mixed with perfectly cooked macaroni, topped
            with crispy breadcrumbs. A classic comfort food{" "}
          </p>
          <button>Add to Cart</button>
        </div>
      </article>
    </>
  );
}
