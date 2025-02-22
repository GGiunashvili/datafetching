// თუ Client-Side ის ჰკარგავთ, აუცილებლად დაამატეთ `use client`

import React from "react";
import { Suspense } from "react";
import Loading from "./loading"; // თქვენი "loading" კომპონენტის იმპორტი

export default async function Page() {
  // ემულირება: 2 წამის ლოდინი
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch("http://localhost:5000/users", {
    cache: "no-store", // ან "no-cache"
  });

  const users = await response.json();

  return (
    <div className="bg-yellow-100">
      <Suspense fallback={<Loading />}>
        <div className="h-full">
          {users.map((user: any) => (
            <div key={user.id}>
              <h1>{user.name}</h1>
              <h1>{user.id}</h1>
            </div>
          ))}
        </div>
      </Suspense>
    </div>
  );
}
