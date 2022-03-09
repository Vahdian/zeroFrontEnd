import * as React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function DashboardCard() {

  return (
   
      <div className="mt-8 flex w-4/5 justify-between items-center p-6 text-gray-900 p-2 py-4 flex-row rounded-xl border-2 border-gray-100 bg-gray-200">
        <div className="flex flex-col items-start">
        <p className="text-xs flex items-center text-gray-400">Online<div className="bg-green-500 h-2 w-2 rounded-full ml-2"></div></p>
       <h1 className="font-bold">Create event</h1> 
       </div>
       <button>
       <FontAwesomeIcon icon={faPlus} className="text-2xl p-2"/>
       </button>
      </div>
     
  )
}
