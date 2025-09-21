import React from "react"
import { Route, Routes } from "react-router-dom"
import LoginUser from "./pages/LoginUser"
import Home from "./pages/home"
import { OrderBilling } from "./components/order-summary/OrderBilling"
import { AddFoodItem } from "./components/add-item/AddFoodItem"
import { DashboardLayout } from "./components/dashboard/DashboardLayout"
import { OrdersList } from "./components/dashboard/OrdersList"
import { Dashboard } from "./components/dashboard/Dashboard"
const App = () => {
  return (
    <div className="w-screen" style={{ fontFamily: "Outfit" }}>
      <Routes>
        <Route path="/login" element={<LoginUser />} />
        <Route path="/order" element={<OrderBilling />} />
        <Route path="/add-item" element={<AddFoodItem />} />
        <Route path="/dashboard" element={<DashboardLayout/>}>
          <Route path="home" element={<Dashboard />} />
          <Route path="orders" element={<OrdersList />} />
          {/* <Route path="items" element={<Items />} /> */}
          {/* <Route path="reports" element={<Reports />} /> */}
          {/* Default route can be 'home' */}
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
