export default function Cart({ cart }) {
  console.log(cart);
  return (
    <>
      <h1>CART</h1>
      {cart.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </>
  );
}
