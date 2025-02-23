import React from "react";
export default async function Page(id: any, payload: any) {
  const response = await fetch(`http://localhost:5000/users/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    cache: "no-store",
  });
}

Page(1, { content: "100", age: "222222" });
