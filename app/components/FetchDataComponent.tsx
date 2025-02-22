"use client";

import { useEffect, useState } from "react";

const FetchDataComponent = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    // მონაცემების გამოწერა JSONPlaceholder API-დან
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const result = await response.json();
        setData(result);
        console.log(result); // მონაცემების გამოჩენა კონსოლში
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // useEffect მხოლოდ კომპონენტის პირველადი დატვირთვის დროს შეასრულებს

  return (
    <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : "Loading..."}
    </div>
  );
};

export default FetchDataComponent;
