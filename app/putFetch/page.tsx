import React from "react";

export default async function Page(id: any, payload: any) {
  // Simulation of a 2-second delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // PUT request to update the user
  const response = await fetch(`http://localhost:5000/users/${id}`, {
    method: "PUT", // PUT method
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(
      payload
      //   {
      //   name: "second",
      //   id: 1,
      // }
    ),
    cache: "no-store",
  });
}
Page(2, { age: "34", name: "walter" });
