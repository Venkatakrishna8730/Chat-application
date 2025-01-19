import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import MesaggeContainer from "../../components/messages/MessageContainer";

const Home = () => {
  return (
    <div className="flex h-[350px] sm:h-[450px] md:h-[550px] p-4 backdrop-filter backdrop-blur-md rounded-lg bg-gray-600 bg-opacity-55">
      <Sidebar />
      <MesaggeContainer />
    </div>
  );
};

export default Home;
