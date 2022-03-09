import React, { useState } from "react";
import Navbar from "../../../shared/navbar/Navbar";
import { useForm } from "react-hook-form";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { API } from "../../../shared/consts/api.const";
import { useNavigate } from "react-router-dom";

export default function AddExpense() {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm();
  const [billsSelected, setbillsSelected] = useState(false);
  const [transportSelected, settransportSelected] = useState(false);
  const [foodSelected, setfoodSelected] = useState(false);
  const [shoppingSelected, setShoppingSelected] = useState(false);

  function onSubmit(newExpense: any) {
    API.post("/expenses", newExpense).then((res) => {
      navigate("/expenses")
    });
  }
  const values = [
    { value: "bills", name: "Bills" },
    { value: "transport", name: "Transport" },
    { value: "shopping", name: "Shopping" },
    { value: "food", name: "Food" },
  ];
  function handleChange(value: any) {
    if (value === "bills") {
      setbillsSelected(true);
    }
    if (value !== "bills") {
      setbillsSelected(false);
    }
    if (value === "transport") {
      settransportSelected(true);
    }
    if (value !== "transport") {
      settransportSelected(false);
    }
    if (value === "food") {
      setfoodSelected(true);
    }
    if (value !== "food") {
      setfoodSelected(false);
    }
    if (value === "shopping") {
      setShoppingSelected(true);
    }
    if (value !== "shopping") {
      setShoppingSelected(false);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center bg-gray-800 w-full pt-2 pb-20">
      <div className="text-white p-2 mt-4 text-3xl m-6">
        Add New
        <FontAwesomeIcon icon={faCoins} />
      </div>
      <form
        className="flex flex-col w-3/4 items-center justify-center gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <select
          className="w-full text-center p-4 rounded-xl"
          {...register("type", { required: true })}
          onChange={(e) => handleChange(e.target.value)}
          defaultValue="Shopping"
        >
          {values.map((value, index) => (
            <option value={value.value}>{value.name}</option>
          ))}
        </select>
        {billsSelected && (
          <select className="w-full text-center p-4 rounded-xl" {...register("class", { required: true })}>
            <option value="wiFi">WiFi</option>
            <option value="energy">Energy</option>
            <option value="water">Water</option>
            <option value="rent">Rent</option>
          </select>
        )}
        {transportSelected && (
          <select className="w-full text-center p-4 rounded-xl" {...register("class", { required: true })}>
            <option value="bus">Bus</option>
            <option value="tube">Tube</option>
            <option value="train">Train</option>
            <option value="petrol">Petrol</option>
          </select>
        )}
        {foodSelected && (
          <select className="w-full text-center p-4 rounded-xl" {...register("class", { required: true })}>
            <option value="market">Market</option>
            <option value="dinner">Dinner</option>
            <option value="munch">Munch</option>
            <option value="paid">Paid</option>
          </select>
        )}
        {shoppingSelected && (
          <select className="w-full text-center p-4 rounded-xl" {...register("class", { required: true })}>
            <option value="house">House Appliances</option>
            <option value="leisure">Leisure</option>
            <option value="gifts">Gifts</option>
          </select>
        )}
        <div className="flex w-full justify-between text-center">
          <select
            className="w-1/3 p-4 rounded-l-xl"
            {...register("day", { required: true })}
          >
            <option value="01">1</option>
            <option value="02">2</option>
            <option value="03">3</option>
            <option value="04">4</option>
            <option value="05">5</option>
            <option value="06">6</option>
            <option value="07">7</option>
            <option value="08">8</option>
            <option value="09">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
          </select>
          <select
            {...register("month", { required: true })}
            className="w-1/3 text-center p-4"
            defaultValue=""
          >
            <option value="01">January</option>
            <option value="02">February</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
          <select
            {...register("year", { required: true })}
            className="w-1/3 p-4 rounded-r-xl"
          >
            <option value="2030">2030</option>
            <option value="2029">2029</option>
            <option value="2028">2028</option>
            <option value="2027">2027</option>
            <option value="2026">2026</option>
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
            <option value="2011">2011</option>
            <option value="2010">2010</option>
            <option value="2009">2009</option>
            <option value="2008">2008</option>
            <option value="2007">2007</option>
            <option value="2006">2006</option>
            <option value="2005">2005</option>
            <option value="2004">2004</option>
            <option value="2003">2003</option>
            <option value="2002">2002</option>
            <option value="2001">2001</option>
            <option value="2000">2000</option>
            <option value="1999">1999</option>
            <option value="1998">1998</option>
            <option value="1997">1997</option>
            <option value="1996">1996</option>
            <option value="1995">1995</option>
            <option value="1994">1994</option>
            <option value="1993">1993</option>
            <option value="1992">1992</option>
            <option value="1991">1991</option>
          </select>
        </div>
        <div className="flex flex-row w-full text-center items-center justify-between rounded-xl">
          <input
            className="w-full text-center p-4 rounded-l-xl w-1/2"
            type="text"
            defaultValue={new Date().getHours()}
            placeholder="HH"
            {...register("hour", { required: true })}
          ></input>
          <span className="font-bold bg-white text-black py-4">:</span>
          <input
          className="w-full text-center p-4 w-1/2 rounded-r-xl"
            type="text"
            placeholder="MM"
            defaultValue={new Date().getMinutes()}
            {...register("minutes", { required: true })}
          ></input>
        </div>
        <input
          type="number"
          step="0.01"
          className="w-full text-center p-4 rounded-xl"
          placeholder="Amount"
          {...register("amount", { required: true })}
        ></input>
        <input
          type="text"
          placeholder="Description"
          className="text-center w-full p-4 rounded-xl"
          {...register("description", { required: true })}
        ></input>
        <div className="flex flex-row items-center justify-center align-middle">
          <div className="text-white text-sm mr-4 p-4">
            Is it a home expense?
          </div>
          <input
            type="checkbox"
            className="p-4"
            {...register("isHomeExpense", { required: false })}
          ></input>
        </div>
        <input
          type="submit"
          className="text-white rounded-xl p-4 bg-gray-700 w-full"
        ></input>
      </form>
      <div className="grow flex h-20"></div>
      <Navbar></Navbar>
    </div>
  );
}
