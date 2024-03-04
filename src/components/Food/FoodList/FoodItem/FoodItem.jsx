export default function FoodItem({
  id,
  name,
  price,
  description,
  image,
  onAdd,
}) {
  return (
    <>
      <article className="bg-black/30">
        <div>
          <img
            src={`../../../../../backend/public/${image}`}
            alt={name}
            className="w-full"
          />
          <h1>{name}</h1>
          <button>${price}</button>
          <p>{description}</p>
          <button className="button" onClick={onAdd}>
            Add to Cart
          </button>
        </div>
      </article>
    </>
  );
}
