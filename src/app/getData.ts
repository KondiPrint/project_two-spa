export async function getData() {
  const data = await fetch(
    "https://mocki.io/v1/8a4d30ef-78b5-4cb2-8ad6-fe0d7dd08e0e"
  );

  if (!data.ok) {
    throw new Error("failed");
  }

  return data.json();
}
