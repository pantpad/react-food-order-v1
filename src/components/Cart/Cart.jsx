export default function Cart({ cart }) {
  console.log(cart);
  return (
    <>
      <h1>CART</h1>
      {cart.map((item) => (
        <article key={item.id} className="flex gap-2">
          <p>{item.name}</p>
          <p>${item.price}</p>
          <p>{item.quantity}</p>
          <p>${item.price * item.quantity}</p>
        </article>
      ))}
    </>
  );
}
