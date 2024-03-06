export default function FoodItem({
  id,
  name,
  price,
  description,
  image,
  onAdd,
}) {
  //console.log("FoodItem");

  return (
    <>
      <article className="rounded-xl bg-black/30">
        <div className="flex h-full flex-col justify-start">
          <img
            src={`../../../../../backend/public/${image}`}
            alt={name}
            className="w-full rounded-xl"
          />
          <div className="flex h-full flex-col justify-between p-4">
            <h1 className="text-xl">{name}</h1>
            <button>${price}</button>
            <p className="text-pretty">{description}</p>
            <button className="button" onClick={onAdd}>
              Add to Cart
            </button>
          </div>
        </div>
      </article>
    </>
  );
}
