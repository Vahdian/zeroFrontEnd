import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faCompass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function BlackCard() {
  return (
    <div className="mt-2 flex w-full items-start text-gray-400 flex-wrap justify-center pt-4">
      <Link to="/devices" className="flex w-2/5 p-2 py-6 flex-col rounded-md h-20 justify-center items-center bg-gradient-to-r from-yellow-300 to-green-500 text-white font-bold m-1 text-2xl">
        <FontAwesomeIcon icon={faCompass} />
        <p className="text-sm font-bold mt-1">Utilities</p>
      </Link>
      <Link to="/notes" className="flex w-2/5 p-2 py-6 flex-col rounded-md h-20 justify-center items-center bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold m-1 text-2xl">
        <FontAwesomeIcon icon={faPenToSquare} />
        <p className="text-sm font-bold mt-1">Notes</p>
      </Link>
      <Link to="/routine" className="flex w-2/5 p-2 py-6 flex-col rounded-md h-20 justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold m-1 text-2xl">
        {" "}
        <FontAwesomeIcon icon={faDumbbell} />
        <p className="text-sm font-bold mt-1">WorkOut</p>
      </Link>
      <div className="flex w-2/5 p-2 py-6 flex-col rounded-md h-20 justify-center items-center bg-gradient-to-r from-red-500 to-yellow-500 text-white font-bold m-1 text-2xl">
        {" "}
        <FontAwesomeIcon icon={faCalendarDays} />
        <p className="text-sm font-bold mt-1">Calendar</p>
      </div>
    </div>
  );
}
