export default async function GetData() {
  const response = await fetch("http://localhost:5001/users");
  const users = await response.json();

  return (
    <div>
      {users.map((user: any) => (
        <div key={user.id}>
          <h1>{user.name}</h1>
        </div>
      ))}
    </div>
  );
}
