"use client";
import React, { useEffect, useState } from "react";

export default function PageComponent() {
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const deleteUser = async (id: number) => {
      try {
        const response = await fetch(`http://localhost:5000/users/${id}`, {
          method: "DELETE",
        });

        if (!response.ok) {
          throw new Error("Failed to delete user");
        }

        const data = await response.json();
        setUser(data);
      } catch (error: any) {
        setError(error.message);
      }
    };

    deleteUser(18); // Call the function with the user ID
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>Loading...</div>;

  return <div>User deleted successfully: {JSON.stringify(user)}</div>;
}
