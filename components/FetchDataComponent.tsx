"use client";

import React, { useEffect, useState } from "react";

const FetchDataComponent = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // შეამოწმეთ რომ data.users არის მასივი
  if (!Array.isArray(data?.users)) {
    return <div>Data is not an array or has not loaded yet.</div>;
  }

  // შეამოწმეთ რომ data.otherData არის მასივი
  if (!Array.isArray(data?.otherData)) {
    return <div>Other data is not an array or has not loaded yet.</div>;
  }

  return (
    <div>
      <h2>Users List:</h2>
      <ul className="flex flex-col gap-x-[20px] gap-y-[10px] p-[40px]">
        {data.users.map((item: any) => (
          <React.Fragment key={item.id}>
            <div className="flex mb-[20px]">
              <div className="ml-[20px]">
                <ul>
                  <li>
                    {item.name} {item.surname}
                  </li>
                  <li>{item.profession}</li>
                </ul>
              </div>
              <div>
                <ul className="ml-[20px]">
                  {item.careerHistory.map((career: any, index: any) => (
                    <li key={index}>
                      {career.year}: {career.position} at {career.company}
                    </li>
                  ))}
                </ul>
                {/* <p>First job:</p>
                <ul>
                  <li>
                    {item.careerHistory[0].year}:{" "}
                    {item.careerHistory[0].position} at{" "}
                    {item.careerHistory[0].company}
                  </li>
                </ul> */}
              </div>
            </div>
          </React.Fragment>
        ))}
      </ul>

      <h2>Other Data:</h2>
      <ul className="flex flex-col gap-x-[20px] gap-y-[10px] p-[40px] ">
        {data.otherData.map((item: any) => (
          <React.Fragment key={item.id}>
            <li>{item.description}</li>
            <li className="border-b border-blue mb-[20px]">{item.id}</li>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default FetchDataComponent;
