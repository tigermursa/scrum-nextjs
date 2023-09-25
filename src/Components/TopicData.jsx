"use client";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { fadeIn } from "/variants";

const TopicData = () => {
  const [completedTopics, setCompletedTopics] = useState({});

  useEffect(() => {
    const storedTopics =
      JSON.parse(localStorage.getItem("completedTopics")) || {};
    setCompletedTopics(storedTopics);
  }, []);

  const markAsComplete = (topic) => {
    const updatedTopics = { ...completedTopics, [topic]: true };
    setCompletedTopics(updatedTopics);
    localStorage.setItem("completedTopics", JSON.stringify(updatedTopics));

    Swal.fire({
      icon: "success",
      title: "Congratulations!",
      text: `You've completed the topic: ${topic}`,
      confirmButtonText: "Great!",
      customClass: {
        title: "sweet-title",
        htmlContainer: "sweet-html",
        popup: "sweet-popup",
      },
    });
  };

  const topicList = [
    "Imperative vs Declarative Programming",
    "What is React ? Do we Need React to learn next js (img)?",
    "What is Next.js? (img) ",
    "why should we learn is Next.js? ",
    "Classic Next.js vs Next.js 13  (img)",
    "Why Should we Learn Next.js? (img)",
    "Websites before SPA?",
    "Website After SPA?",
    "Website now with Next.js?",
    "What is Rendering?",
    "Pre-Rendering vs CSR?  (img)",
    "Server components vs Client Components? (img)",
    "What is SSG? Example",
    "What is SSR? Example",
    "SSG VS SSR? (img)",
    "What is ISR and why? (img)",
    "Page.js",
    "Layout.js ",
    "Template.js ",
    "What is caching in Next.js?",
    "What are cookies? ",
    "Why Next.js is good for SEO?",
    "What is Edge Runtime and why does Next.js use it?",
    "What is Middleware? (img)",
    "Next.js Routes",
    "Next.js Routes (Group)",
    "Styling",
    "404 PAGE ",
    "What are cookies? (study more)",
    "Do we need Redux in Next.js?",
    "Server-side fetching vs Client-side fetching with demo API.",
    "How should we use next js to get best performance",
    "What is missing in Next.js?",
    "CRUD OPERATION "
  ];

  return (
    <ul className="flex flex-col justify-center items-center">
      {topicList.map((topic, index) => (
        <motion.li
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          key={index}
          className="w-1/3 rounded-md font-bold"
          style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
            backgroundColor: completedTopics[topic] ? "#4CAF50" : "white",
            color: completedTopics[topic] ? "white" : "black",
          }}
        >
          <input
            type="checkbox"
            checked={completedTopics[topic] || false}
            onChange={() => markAsComplete(topic)}
            style={{ marginRight: "10px" }}
          />
          <span className="sweet-html">
            {index + 1}) {topic}
          </span>
        </motion.li>
      ))}
    </ul>
  );
};

export default TopicData;
