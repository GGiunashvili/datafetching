export default async function Page() {
  try {
    const response = await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "newname",
        content: "200",
      }),
    });
    if (!response.ok) {
      throw new Error(`Network response was not ok ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
