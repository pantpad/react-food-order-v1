export async function fetchMeals() {
  const resp = await fetch("http://localhost:3000/meals");
  const data = await resp.json();
  return data;
}
