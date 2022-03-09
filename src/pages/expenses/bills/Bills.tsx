import React, { useEffect, useState } from 'react'
import { API } from '../../../shared/consts/api.const'
import Navbar from '../../../shared/navbar/Navbar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight, faWifi } from "@fortawesome/free-solid-svg-icons";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import { faPlug } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Link } from 'react-router-dom';



export default function Bills() {
    ChartJS.register(ArcElement, Tooltip);
    const [bills, setBills] = useState([])
    const [thisMonthbills, setThisMonthBills] = useState([])
    const [priceAndClass, setPriceAndClass] = useState([])
    const [labels, setLabels] = useState([])

    const data = {
      labels: labels,
      datasets: [
        {
          data: priceAndClass,
          backgroundColor: [
            'rgba(0, 200, 129, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(120, 120, 235, 0.6)',
            'rgba(0, 170, 170, 0.6)',
          ],
          borderColor: [
            'rgba(0, 0, 0, 0)',
          ],
          borderWidth: 1,
        },
      ],
      options: {
        layout: {
            padding: 50
        }}
    
};

    

function getMyMonth(month: any){
    return month < 10 ? 0 + (new Date().getMonth()+1).toString() : (month + 1).toString()
    
      }
function getBills() {
     API.get("/expenses").then((res: any) => {
    const sorted = res.data.sort((a: any, b: any) => b.order - a.order);
    const myBills = sorted.filter((bills: any) => bills.type === "bills" )
    setBills(myBills)
    const month = new Date().getMonth()
    const myMonth = getMyMonth(month)
    const billsInThisMonth = myBills.filter(
        (expense: any) => expense.month === myMonth 
      );
    setThisMonthBills(billsInThisMonth)
    const copyBills = billsInThisMonth
    const graph: any = []
    const labels: any = []
    copyBills.map((bill: any)=> {
      graph.push(bill.amount)
      labels.push(bill.class.toUpperCase())
    })
    setPriceAndClass(graph)
    setLabels(labels)
    })}
    useEffect(getBills, []) 
     
  return (
    <div className='h-screen bg-gray-900 text-white flex flex-col items-center w-full'>
        <div className='flex flex-col items-center bg-black pb-10 rounded-b-3xl w-full'>
        <Link to="/bills-history" className='text-xl mt-10 mb-4'>THIS MONTH  <FontAwesomeIcon icon={faCircleChevronRight} /></Link>
        <div className='text-4xl mb-6 text-indigo-500'> {bills ? Math.round(thisMonthbills.reduce((accumulator: any, actual: any) => accumulator + actual.amount, 0) * 100) / 100: 0}€</div>
        <div className='flex flex-row justify-around items-center w-3/4 gap-2'>
        {thisMonthbills.map((bill: any) =>
        <div className='text-white flex flex-col bg-gradient-to-r from-indigo-500 to-green-500 p-2 rounded-xl items-center w-20'>
            {bill.class.toUpperCase() === "WIFI" && (
                    <FontAwesomeIcon icon={faWifi} />
                  )}
                   {bill.class.toUpperCase() === "WATER" && (
                    <FontAwesomeIcon icon={faDroplet} />
                  )}
                  {bill.class.toUpperCase() === "ENERGY" && (
                    <FontAwesomeIcon icon={faPlug} />
                  )}
                  {bill.class.toUpperCase() === "RENT" && (
                    <FontAwesomeIcon icon={faHouse} />
                  )}
            <div className='text-xs mt-2 font-bold'>{bill.amount}€</div>
            </div>
        )}
        </div>
        <div className='mt-8'>
        <Doughnut data={data}/>
        </div>
        <div className='mt-4 text-xs'>You've spent <span className='text-green-400'>{Math.round(((thisMonthbills.reduce((accumulator: any, actual: any) => accumulator + actual.amount, 0)/1350)*100)*100)/100}%</span> of your income</div>
        </div>
        <Navbar></Navbar>
    </div>
  )
}
