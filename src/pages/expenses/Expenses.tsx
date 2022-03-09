import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import { faBus } from "@fortawesome/free-solid-svg-icons";
import { faCarrot } from "@fortawesome/free-solid-svg-icons";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { API } from "../../shared/consts/api.const";
import Navbar from "../../shared/navbar/Navbar";
import { Link } from "react-router-dom";



export default function Expenses() {
  const [myExpenses, setmyExpenses] = useState([]);
  const [expensesCurrentMonth, setExpensesCurrentMonth] = useState<any>([]);


  function getMyMonth(monthNumber: any){
    if(monthNumber < 10){
      return 0 + (new Date().getMonth()+1).toString()
    } else {
      return (monthNumber + 1).toString()
    }
  }

  function getExpenses() {
    API.get("/expenses").then((res: any) => {
      const sorted = res.data.sort((a: any, b: any) => b.order - a.order);
      const myMonth = new Date().getMonth()
      const thisMonth = (getMyMonth(myMonth))
      const expensesInThisMonth = sorted.filter(
        (expense: any) => expense.month === thisMonth 
      );
      setmyExpenses(sorted);
      setExpensesCurrentMonth(expensesInThisMonth);
      console.log(expensesInThisMonth);
    });
  }

  useEffect(getExpenses, []);

  return (
    <div className="bg-gray-800 h-full text-white flex flex-col items-center pt-10 w-full">
      <input className="p-1 mb-10 rounded-xl w-3/4 bg-gray-900"></input>
      <div className="overflow-y-scroll h-60 flex flex-col w-full items-center">
        {myExpenses.map((data: any, index: any) => (
          <Link key={index} to={"/expenses/" + data._id} className="bg-gradient-to-r from-indigo-800 to-green-500 p-4 mb-2 rounded-xl flex flex-col items-end w-3/4">
            <div className="flex flex-row justify-between items-start w-full">
              <div className="flex flex-col justify-center items-start text-right font-bold">
                <div className="flex flex-row flex-start items-center">
                  <h1 className="mr-2">{data.type.toUpperCase()}</h1>
                  {data.type.toUpperCase() === "BILLS" && (
                    <FontAwesomeIcon icon={faBolt} />
                  )}
                  {data.type.toUpperCase() === "TRANSPORT" && (
                    <FontAwesomeIcon icon={faBus} />
                  )}
                  {data.type.toUpperCase() === "FOOD" && (
                    <FontAwesomeIcon icon={faCarrot} />
                  )}
                  {data.type.toUpperCase() === "SHOPPING" && (
                    <FontAwesomeIcon icon={faGift} />
                  )}
                </div>
                <div className="text-sm font-normal text-gray-300">
                  {data.description}
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="text-xs">
                  {data.day}-{data.month}-{data.year}
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between items-end w-full">
              <div className="text-xs text-gray-400">
                {data.hour}:{data.minutes}
              </div>
              <div className="text-md font-bold">{data.amount}€</div>
            </div>
          </Link>
        ))}
      </div>
      <div></div>
      <div className="bg-black grow w-full h-80 rounded-t-3xl flex-col flex items-center justify-center text-3xl ">
        <Link to="/addExpense" className="mb-6 font-bold text-2xl">
          Add <FontAwesomeIcon icon={faPlus} />
        </Link>
        <div className=" flex w-full items-start text-gray-400 flex-wrap justify-center p-2">
          <Link
            to="/bills"
            className="flex w-1/5 p-2 py-6 flex-col rounded-md h-14 justify-center border-white border-solid items-center bg-gradient-to-r from-indigo-500 to-red-500 text-white font-bold m-1 text-sm"
          >
            <FontAwesomeIcon icon={faBolt} />
            <p className="text-xs font-bold mt-1">
              {Math.round(
                expensesCurrentMonth
                  .filter((expense: any) => expense.type === "bills")
                  .reduce(
                    (accumulator: any, actual: any) =>
                      accumulator + actual.amount,
                    0
                  ) * 100
              ) / 100}
              €
            </p>
          </Link>
          <div className="flex w-1/5 p-2 py-6 flex-col rounded-md h-14 justify-center items-center bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold m-1 text-sm">
            <FontAwesomeIcon icon={faBus} />
            <p className="text-xs font-bold mt-1">
              {Math.round(
                expensesCurrentMonth
                  .filter((expense: any) => expense.type === "transport")
                  .reduce(
                    (accumulator: any, actual: any) =>
                      accumulator + actual.amount,
                    0
                  ) * 100
              ) / 100}
              €
            </p>
          </div>
          <Link
            to="/food"
            className="flex w-1/5 p-2 py-6 flex-col rounded-md h-14 justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold m-1 text-sm"
          >
            {" "}
            <FontAwesomeIcon icon={faCarrot} />
            <p className="text-xs font-bold mt-1">
              {Math.round(
                expensesCurrentMonth
                  .filter((expense: any) => expense.type === "food")
                  .reduce(
                    (accumulator: any, actual: any) =>
                      accumulator + actual.amount,
                    0
                  ) * 100
              ) / 100}
              €
            </p>
          </Link>
          <div className="flex w-1/5 p-2 py-6 flex-col rounded-md h-14 justify-center items-center bg-gradient-to-r from-orange-300 to-yellow-500 text-white font-bold m-1 text-sm">
            {" "}
            <FontAwesomeIcon icon={faGift} />
            <p className="text-xs font-bold mt-1">
              {Math.round(
                expensesCurrentMonth
                  .filter((expense: any) => expense.type === "shopping")
                  .reduce(
                    (accumulator: any, actual: any) =>
                      accumulator + actual.amount,
                    0
                  ) * 100
              ) / 100}
              €
            </p>
          </div>
        </div>
       
        <div className="flex flex-row items-center justify-around w-full mb-6">
          <div className="flex flex-col items-start justify-center">
          <div>
              {expensesCurrentMonth
                ? Math.round(
                    expensesCurrentMonth.reduce(
                      (accumulator: any, actual: any) =>
                        accumulator + actual.amount,
                      0
                    ) * 100
                  ) / 100
                : 0}
              €
          </div>
          <div className="text-xs">ESTE MES</div>
          </div>

          <div className="flex flex-col items-start justify-center">
          <div>
              {Math.round(
                myExpenses.reduce(
                  (accumulator: any, actual: any) =>
                    accumulator + actual.amount,
                  0
                ) * 100
              ) / 100}
              €
          </div>
          <div className="text-xs">TOTAL</div>
        </div>
        </div>
      </div>
      <Navbar></Navbar>
    </div>
  );
}
