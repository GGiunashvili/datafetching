import React from "react";

export default async function Page() {
  // 2 წამის ემულირება
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch("http://localhost:5000/users", {
    cache: "no-store", // ან "no-cache"
  });

  const users = await response.json();

  return (
    <>
      {users.map((user: any) => (
        <div key={user.id}>
          <h1>{user.name}</h1>
          <h1>{user.id}</h1>
        </div>
      ))}
    </>
  );
}
