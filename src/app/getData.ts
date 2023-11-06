export async function getData() {
  const data = await fetch("http://localhost:3000/assets/content_data.json");

  if (!data.ok) {
    throw new Error("failed");
  }

  return data.json();
}