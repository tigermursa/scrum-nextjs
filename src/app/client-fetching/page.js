"use client";
import React, { useEffect, useState } from "react";

const ClientFetching = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const dataa = await res.json();
      setData(dataa);
    };
    loadData();
  }, []);

  console.log(data);
  return (
    <div className="container mx-auto">
      {data.map(({ id, name }) => (
        <div key={id} className="block border border-blue-600 p-2 my-2">
          <h1>
            {id}.{name}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default ClientFetching;
