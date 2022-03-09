import React, { useEffect, useState } from "react";
import { API } from "../../../shared/consts/api.const";
import { Link, useParams, useNavigate } from "react-router-dom";
import Navbar from "../../../shared/navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import { faBus } from "@fortawesome/free-solid-svg-icons";
import { faCarrot } from "@fortawesome/free-solid-svg-icons";
import { faBolt } from "@fortawesome/free-solid-svg-icons";


export default function ExpensesDetail() {
  const { id } = useParams();
  const [detail, setDetail] = useState<any>([]);
  const navigate = useNavigate();

  function iterate(obj: any) {
    for (var key in obj) {
      if (obj[key] !== null && typeof obj[key] === "object") {
        iterate(obj[key]);
      } else if (obj[key] !== null && typeof obj[key] === "string") {
        obj[key] = obj[key].toUpperCase();
      }
    }
    console.log(obj);
    return obj;
  }

  function getExpenses() {
    API.get("/expenses/" + id).then((res: any) => {
      const data = res.data;
      const capitalizedData = iterate(data);
      setDetail(capitalizedData);
    });
  }

  function deleteExp(){
      API.delete("/expenses/" + id).then((res: any) => {
        console.log("deleted");
        navigate("/expenses")
       })
}

  useEffect(getExpenses, [id]);
  return (
    <div className="h-screen bg-gradient-to-r from-indigo-800 to-green-500 text-white flex items-center justify-center">
      <div className="flex flex-col items-center m-6 bg-gray-900 rounded-3xl justify-around h-5/6 mb-16">
        <Link
          to="/expenses"
          className="text-3xl font-bold mt-4 flex items-center justify-end w-full mr-16 pt-8"
        >
          <h2>x</h2>
        </Link>
        <div className="p-20 flex flex-col items-center justify-around h-full">
          <div className="text-3xl border-2 border-green-700 w-40 h-40  rounded-full flex items-center justify-center">
            {detail && detail.amount}€
          </div>
          <div className="flex flex-col items-center mt-4">
            <div className="flex flex-row items-center text-xs text-gray-400">
              <div>{detail && detail.hour}:</div>
              <div>{detail && detail.minutes}</div>
            </div>
            <div className="flex flex-row items-center text-xs text-gray-600 mb-2">
            <div>{detail && detail.day}-</div>
            <div>{detail && detail.month}-</div>
            <div>{detail && detail.year}</div>
          </div>
            <div className="text-4xl font-bold">{detail && detail.class}</div>
            <div className="flex flex-row">
              <div className="text-md text-gray-400 mb-4">
                {detail.type}
                {detail.type === "BILLS" && (
                  <FontAwesomeIcon icon={faBolt} className="ml-2" />
                )}
                {detail.type === "SHOPPING" && (
                  <FontAwesomeIcon icon={faGift} className="ml-2" />
                )}
                {detail.type === "FOOD" && (
                  <FontAwesomeIcon icon={faCarrot} className="ml-2" />
                )}
                {detail.type === "TRANSPORT" && (
                  <FontAwesomeIcon icon={faBus} className="ml-2" />
                )}
              </div>
            </div>
          </div>
          <div className="text-xs">{detail && detail.description}</div>
          <button className="bg-gradient-to-r from-indigo-800 to-green-500 p-2 px-14 rounded-xl mt-10" onClick={()=>deleteExp()}>
            Delete
          </button>
        </div>
      </div>
      <Navbar></Navbar>
    </div>
  );
}
