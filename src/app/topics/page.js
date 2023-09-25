import TopicData from "@/Components/TopicData";
import React from "react";

export const metadata = {
  title: 'Topic',
  description: 'Generated by create next app',
}

const Topics = () => {
  return (
    <div className="bg-gradient-to-b from-blue-500 to-white">
      <div>
        <h1 className="text-center font-bold text-4xl text-white pt-3 pb-5">
          Next js 13.5.2
        </h1>
        <div className="text-center font-bold text-xl text-white  pb-10 flex flex-col">
          <p> {new Date().toDateString()}</p>{" "}
          <p className="mt-3">Topic : Hello Next js </p>
        </div>
        <TopicData />
      </div>
    </div>
  );
};

export default Topics;
