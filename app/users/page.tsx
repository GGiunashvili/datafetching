export default async function Page() {
  const response = await fetch("http://localhost:5000/users", {
    cache: "no-cache",
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const users = await response.json();

  return (
    <div>
      {users.map((user: any) => (
        <div key={user.id}>
          <h1>{user.name}</h1>
          <h1>{user.id}</h1>
        </div>
      ))}
    </div>
  );
}
