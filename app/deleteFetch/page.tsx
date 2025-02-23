export async function Page(id: any) {
  const response = await fetch(`http://localhost:5000/users/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(`Network response was not ok ${response.status}`);
  }

  return await response.json();
}

await Page(11);
