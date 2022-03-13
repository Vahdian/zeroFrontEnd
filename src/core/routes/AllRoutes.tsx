import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../../pages/dashboard/Dashboard'
import Devices from '../../pages/devices/Devices'
import AddExpense from '../../pages/expenses/addExpense/AddExpense'
import Bills from '../../pages/expenses/bills/Bills'
import Food from '../../pages/expenses/food/Food'
import Expenses from '../../pages/expenses/Expenses'
import ExpensesDetail from '../../pages/expenses/expensesDetail/ExpensesDetail'
import Settings from '../../pages/settings/Settings'
import BillsHistory from '../../pages/expenses/bills/billsHistory/BillsHistory'
import Routine from '../../pages/gym/Gym'
import WorkOut from '../../pages/gym/workOut/WorkOut'
import Notes from '../../pages/notes/Notes'
export default function AllRoutes() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Dashboard />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/devices" element={<Devices />}/>
      <Route path="/expenses" element={<Expenses />}/>
      <Route path="/addExpense" element={<AddExpense />}/>
      <Route path="/bills" element={<Bills />}/>
      <Route path="/expenses/:id" element={<ExpensesDetail/>}/>
      <Route path="/food" element={<Food />}/>
      <Route path="/settings" element={<Settings />}/>
      <Route path="/bills-history" element={<BillsHistory />}/>
      <Route path="/routine" element={<Routine />}/>
      <Route path="/workout" element={<WorkOut />}/>
      <Route path="/notes" element={<Notes />}/>



     
      
      

      </Routes>
    </div>
  )
}
