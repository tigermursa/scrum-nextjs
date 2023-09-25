import React from "react";

const dynamic = ({ params }) => {
  console.log(params);
    return <div>{params.id}</div>;
};

export default dynamic;
