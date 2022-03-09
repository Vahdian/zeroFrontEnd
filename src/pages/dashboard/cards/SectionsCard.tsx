import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function SectionsCard() {
  return (
    <div className="mt-2 flex w-full items-start text-gray-400 flex-wrap justify-center p-2">
      <Link to="/devices" className="flex w-2/5 p-2 py-6 flex-col rounded-md h-20 justify-center items-center bg-gradient-to-r from-indigo-500 to-red-500 text-white font-bold m-1 text-2xl">
        <FontAwesomeIcon icon={faPowerOff} />
        <p className="text-sm font-bold mt-1">Devices</p>
      </Link>
      <div className="flex w-2/5 p-2 py-6 flex-col rounded-md h-20 justify-center items-center bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold m-1 text-2xl">
        <FontAwesomeIcon icon={faLightbulb} />
        <p className="text-sm font-bold mt-1">Lights</p>
      </div>
      <Link to="/expenses" className="flex w-2/5 p-2 py-6 flex-col rounded-md h-20 justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold m-1 text-2xl">
        {" "}
        <FontAwesomeIcon icon={faCoins} />
        <p className="text-sm font-bold mt-1">Costs</p>
      </Link>
      <div className="flex w-2/5 p-2 py-6 flex-col rounded-md h-20 justify-center items-center bg-gradient-to-r from-orange-300 to-yellow-500 text-white font-bold m-1 text-2xl">
        {" "}
        <FontAwesomeIcon icon={faHouse} />
        <p className="text-sm font-bold mt-1">Spaces</p>
      </div>
    </div>
  );
}
