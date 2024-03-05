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

export async function updateOrders(order) {
  const resp = await fetch("http://localhost:3000/orders", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ order }),
  });

  if (!resp.ok) {
    throw new Error("Failed to update orders :(");
  }

  const data = await resp.json();
  return data;
}
