export async function fetchMeals() {
  const resp = await fetch("http://localhost:3000/meals");

  if (!resp.ok) {
    throw new Error("Failed to fetch meals :(");
  }

  const data = await resp.json();
  return data;
}

export async function fetchOrders() {
  const resp = await fetch("http://localhost:3000/orders");

  if (!resp.ok) {
    throw new Error("Failed to fetch orders :(");
  }

  const data = await resp.json();

  return data;
}
