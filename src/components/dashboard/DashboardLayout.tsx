import React from "react"
import { FC } from "react"
import {
  FaHome,
  FaBox,
  FaClipboardList,
  FaChartPie,
  FaCog,
} from "react-icons/fa"
import { FaBell, FaUserCircle } from "react-icons/fa"
import { matchPath, NavLink, Outlet } from "react-router-dom"

const Header: FC = () => (
  <div className="navbar p-2 sticky top-0 z-50 bg-base-100  shadow-md">
    {/* Left Section */}
    <div className="flex-1">
      <span className="text-xl font-bold tracking-wide">🍴 POS Admin</span>
    </div>

    {/* Right Section */}
    <div className="flex-none flex gap-2">
      <button className="btn btn-ghost btn-sm btn-circle hover:bg-white/20 transition">
        <FaBell className="h-5 w-5" />
      </button>
      <button className="btn btn-ghost btn-sm  btn-circle hover:bg-white/20 transition">
        <FaCog className="h-5 w-5" />
      </button>
      <button className="btn btn-ghost btn-sm btn-circle hover:bg-white/20 transition">
        <FaUserCircle className="h-6 w-6" />
      </button>
    </div>
  </div>
)

const BottomNav: FC = () => {
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-base-100 shadow-inner border-t border-gray-200 z-50">
      <div className="flex justify-around items-center h-14">
        <NavLink
          to="/dashboard/home"
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-primary" : "text-gray-500"
            }`
          }
        >
          <FaHome className="h-5 w-5" />
          <span className="text-xs">Home</span>
        </NavLink>
        <NavLink
          to="/dashboard/orders"
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-primary" : "text-gray-500"
            }`
          }
        >
          <FaClipboardList className="h-5 w-5" />
          <span className="text-xs">Orders</span>
        </NavLink>
        <NavLink
          to="/dashboard/items"
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-primary" : "text-gray-500"
            }`
          }
        >
          <FaBox className="h-5 w-5" />
          <span className="text-xs">Items</span>
        </NavLink>
        <NavLink
          to="/dashboard/reports"
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-primary" : "text-gray-500"
            }`
          }
        >
          <FaChartPie className="h-5 w-5" />
          <span className="text-xs">Reports</span>
        </NavLink>
        <NavLink
          to="/dashboard/settings"
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-primary" : "text-gray-500"
            }`
          }
        >
          <FaCog className="h-5 w-5" />
          <span className="text-xs">Settings</span>
        </NavLink>
      </div>
    </div>
  )
}
export const DashboardLayout = () => {
  return (
    <div className="bg-base-200 min-h-screen w-screen pb-16">
      <Header />
      <Outlet />
      <BottomNav />
    </div>
  )
}
