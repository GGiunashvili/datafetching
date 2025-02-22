"use client";

import React, { useEffect, useState } from "react";

const FetchDataComponent = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data && (
        <ul className="flex flex-col gap-x-[20px] gap-y-[10px] p-[40px] ">
          {data.map((item: any) => (
            <React.Fragment key={item.id}>
              <li>{item.title}</li>
              <li className="border-b border-red mb-[20px]">{item.id}</li>
            </React.Fragment>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FetchDataComponent;
