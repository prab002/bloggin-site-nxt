import React from "react";
import CardComponent from "./CardComponent";

const Home = () => {
  return (
    <div className="flex items-start justify-center gap-4 flex-col w-auto">
      <CardComponent />
      <CardComponent />
      <CardComponent />
    </div>
  );
};

export default Home;
