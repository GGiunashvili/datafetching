import { Suspense } from "react";

import Loading from "./loading";

export default async function Page() {
  // ემულირება: 2 წამის ლოდინი
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch("http://localhost:5000/users", {
    cache: "no-store", // ან "no-cache"
  });

  const users = await response.json();

  return (
    <Suspense fallback={<Loading />}>
      <div>
        {users.map((user: any) => (
          <div key={user.id}>
            <h1>{user.name}</h1>
            <h1>{user.id}</h1>
          </div>
        ))}
      </div>
    </Suspense>
  );
}
