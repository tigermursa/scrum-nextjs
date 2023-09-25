import React from "react";

const ServerFetching = async () => {

  const loadUserData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
      cache: "no-cache",
    });

    return res.json();
  };

  const users = await loadUserData();
  return (
    <div>
      {users.map(({ id, name }) => (
        <div key={id}>
          <h1>{name}</h1>
        </div>
      ))}
    </div>
  );
};

export default ServerFetching;
