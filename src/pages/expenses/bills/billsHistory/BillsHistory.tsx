import React, { useEffect, useState } from "react";
import { API } from "../../../../shared/consts/api.const";
import Navbar from "../../../../shared/navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleChevronLeft,} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faPlug } from "@fortawesome/free-solid-svg-icons";


export default function Bills() {
  const [bills, setBills] = useState([]);
  const [thisYearBills, setThisYearBills] = useState([]);

  function getBills() {
    API.get("/expenses").then((res: any) => {
      const sorted = res.data.sort((a: any, b: any) => b.order - a.order);
      const myBills = sorted.filter((bills: any) => bills.type === "bills");
      setBills(myBills);
      const myYear = new Date().getFullYear.toString()
      const billsInThisYear = myBills.filter(
        (expense: any) => expense.year === myYear
      );
      setThisYearBills(billsInThisYear);
    });
  }
  useEffect(getBills, []);

  return (
    <div className="h-screen bg-gray-900 text-white flex flex-col items-center w-full">
      <div className="flex flex-col items-center bg-black pb-10 rounded-b-3xl w-full">
        <Link to="/bills" className="text-md mt-10 mb-4">
        <FontAwesomeIcon icon={faCircleChevronLeft} />TOTAL
        </Link>
        <div className="text-4xl mb-6 text-indigo-500">
          {" "}
          {thisYearBills
            ? Math.round(
                bills.reduce(
                  (accumulator: any, actual: any) =>
                    accumulator + actual.amount,
                  0
                ) * 100
              ) / 100
            : 0}
          €
        </div>
        <div className="flex w-full flex-wrap justify-center gap-2">
          <div className="flex flex-col items-center justify-center bg-gray-400 p-4 px-8 rounded-xl bg-gradient-to-r from-indigo-800 to-green-500 h-16 w-40">
            <div className="text-sm">JANUARY</div>
            <div className="text-md text-white font-bold">
              {" "}
              {bills
                ? Math.round(
                    bills
                      .filter((a: any) => a.month === "01")
                      .reduce(
                        (accumulator: any, actual: any) =>
                          accumulator + actual.amount,
                        0
                      ) * 100
                  ) / 100
                : 0}
              €
            </div>
            {bills
                      .filter((a: any) => a.month === "01").map((info: any)=>{
                        return info.class === "energy" ? <div className="text-xs text-gray-300"> <FontAwesomeIcon icon={faPlug} />{info.amount}€</div> : ""
                      })}
          </div>
          <div className="flex flex-col bg-gray-400 justify-center items-center p-4 px-8 rounded-xl bg-gradient-to-r from-indigo-800 to-green-500 h-16 w-40">
            <div className="text-sm">FEBRUARY</div>
            <div className="text-md text-white font-bold">
              {" "}
              {bills
                ? Math.round(
                    bills
                      .filter((a: any) => a.month === "02")
                      .reduce(
                        (accumulator: any, actual: any) =>
                          accumulator + actual.amount,
                        0
                      ) * 100
                  ) / 100
                : 0}
              €
            </div>
            {bills
                      .filter((a: any) => a.month === "02").map((info: any)=>{
                        return info.class === "energy" ? <div className="text-xs text-gray-300"> <FontAwesomeIcon icon={faPlug} />{info.amount}€</div> : ""
                      })}
          </div>
          <div className="flex flex-col items-center justify-center bg-gray-400 p-4 px-8 rounded-xl bg-gradient-to-r from-indigo-800 to-green-500 h-16 w-40">
            <div className="text-md">MARCH</div>
            <div className="text-md text-white font-bold">
              {" "}
              {bills
                ? Math.round(
                    bills
                      .filter((a: any) => a.month === "03")
                      .reduce(
                        (accumulator: any, actual: any) =>
                          accumulator + actual.amount,
                        0
                      ) * 100
                  ) / 100
                : 0}
              €
            </div>
          </div>
          <div className="flex flex-col items-center justify-center bg-gray-400 p-4 px-8 rounded-xl bg-gradient-to-r from-indigo-800 to-green-500 h-16 w-40">
            <div className="text-md">APRIL</div>
            <div className="text-md text-white font-bold">
              {" "}
              {bills
                ? Math.round(
                    bills
                      .filter((a: any) => a.month === "04")
                      .reduce(
                        (accumulator: any, actual: any) =>
                          accumulator + actual.amount,
                        0
                      ) * 100
                  ) / 100
                : 0}
              €
            </div>
          </div>
          <div className="flex flex-col items-center justify-center bg-gray-400 p-4 px-8 rounded-xl bg-gradient-to-r from-indigo-800 to-green-500 h-16 w-40">
            <div className="text-md">MAY</div>
            <div className="text-md text-white font-bold">
              {" "}
              {bills
                ? Math.round(
                    bills
                      .filter((a: any) => a.month === "05")
                      .reduce(
                        (accumulator: any, actual: any) =>
                          accumulator + actual.amount,
                        0
                      ) * 100
                  ) / 100
                : 0}
              €
            </div>
          </div>
          <div className="flex flex-col justify-center items-center bg-gray-400 p-4 px-8 rounded-xl bg-gradient-to-r from-indigo-800 to-green-500 h-16 w-40">
            <div className="text-md">JUNE</div>
            <div className="text-md text-white font-bold">
              {" "}
              {bills
                ? Math.round(
                    bills
                      .filter((a: any) => a.month === "06")
                      .reduce(
                        (accumulator: any, actual: any) =>
                          accumulator + actual.amount,
                        0
                      ) * 100
                  ) / 100
                : 0}
              €
            </div>
          </div>
          <div className="flex flex-col items-center justify-center bg-gray-400 p-4 px-8 rounded-xl bg-gradient-to-r from-indigo-800 to-green-500 h-16 w-40">
            <div className="text-md">JULY</div>
            <div className="text-md text-white font-bold">
              {" "}
              {bills
                ? Math.round(
                    bills
                      .filter((a: any) => a.month === "07")
                      .reduce(
                        (accumulator: any, actual: any) =>
                          accumulator + actual.amount,
                        0
                      ) * 100
                  ) / 100
                : 0}
              €
            </div>
          </div>
          <div className="flex flex-col justify-center items-center bg-gray-400 p-4 px-8 rounded-xl bg-gradient-to-r from-indigo-800 to-green-500 h-16 w-40">
            <div className="text-md">AUGUST</div>
            <div className="text-md text-white font-bold">
              {" "}
              {bills
                ? Math.round(
                    bills
                      .filter((a: any) => a.month === "08")
                      .reduce(
                        (accumulator: any, actual: any) =>
                          accumulator + actual.amount,
                        0
                      ) * 100
                  ) / 100
                : 0}
              €
            </div>
          </div>
          <div className="flex flex-col items-center justify-center bg-gray-400 p-4 px-8 rounded-xl bg-gradient-to-r from-indigo-800 to-green-500 h-16 w-40">
            <div className="text-md">SEPTEMBER</div>
            <div className="text-md text-white font-bold">
              {" "}
              {bills
                ? Math.round(
                    bills
                      .filter((a: any) => a.month === "09")
                      .reduce(
                        (accumulator: any, actual: any) =>
                          accumulator + actual.amount,
                        0
                      ) * 100
                  ) / 100
                : 0}
              €
            </div>
          </div>
          <div className="flex flex-col items-center justify-center bg-gray-400 p-4 px-8 rounded-xl bg-gradient-to-r from-indigo-800 to-green-500 h-16 w-40">
            <div className="text-md">OCTOBER</div>
            <div className="text-md text-white font-bold">
              {" "}
              {bills
                ? Math.round(
                    bills
                      .filter((a: any) => a.month === "10")
                      .reduce(
                        (accumulator: any, actual: any) =>
                          accumulator + actual.amount,
                        0
                      ) * 100
                  ) / 100
                : 0}
              €
            </div>
          </div>
          <div className="flex flex-col items-center justify-center bg-gray-400 p-4 px-8 rounded-xl bg-gradient-to-r from-indigo-800 to-green-500 h-16 w-40">
            <div className="text-md">NOVEMBER</div>
            <div className="text-md text-white font-bold">
              {" "}
              {bills
                ? Math.round(
                    bills
                      .filter((a: any) => a.month === "11")
                      .reduce(
                        (accumulator: any, actual: any) =>
                          accumulator + actual.amount,
                        0
                      ) * 100
                  ) / 100
                : 0}
              €
            </div>
          </div>
          <div className="flex flex-col items-center justify-center bg-gray-400 p-4 px-8 rounded-xl bg-gradient-to-r from-indigo-800 to-green-500 h-16 w-40">
            <div className="text-md">DECEMBER</div>
            <div className="text-md text-white font-bold">
              {" "}
              {bills
                ? Math.round(
                    bills
                      .filter((a: any) => a.month === "12")
                      .reduce(
                        (accumulator: any, actual: any) =>
                          accumulator + actual.amount,
                        0
                      ) * 100
                  ) / 100
                : 0}
              €
            </div>
          </div>
        </div>
      </div>
      <Navbar></Navbar>
    </div>
  );
}
