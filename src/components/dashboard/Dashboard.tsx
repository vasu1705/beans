import React, { FC } from "react"
import { OrdersList } from "./OrdersList";
import { FaPlus, FaBoxOpen, FaChartBar, FaClipboardList } from "react-icons/fa"
import { Order } from "../../services/types";


const SummaryCards: FC = () => (
  <div className="grid grid-cols-2 gap-4  p-2">
    <div className="stat bg-pink-100 rounded-xl">
      <div className="stat-title text-sm font-semibold text-gray-600">
        Today’s Orders
      </div>
      <div className="stat-value text-pink-600">45</div>
    </div>
    <div className="stat bg-green-100 rounded-xl">
      <div className="stat-title  text-sm font-semibold text-gray-600">
        Sales Revenue
      </div>
      <div className="stat-value text-green-600">₹12,350</div>
    </div>
    <div className="stat bg-orange-100 rounded-xl">
      <div className="stat-title  text-sm font-semibold text-gray-600">
        Pending Orders
      </div>
      <div className="stat-value text-orange-600">7</div>
    </div>
    <div className="stat bg-blue-100 rounded-xl">
      <div className="stat-title  text-sm font-semibold text-gray-600">
        Active Items
      </div>
      <div className="stat-value text-blue-600 ">28</div>
    </div>
  </div>
)

const QuickActions: FC = () => (
  <div className="card bg-base-100 shadow-md mt-6 p-4">
    <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
    <div className="grid grid-cols-2 gap-3">
      <button className="flex gap-2 items-center justify-center p-2 rounded-lg bg-base-200 text-neutral hover:bg-base-300 transition">
        <FaPlus className="text-sm" />
        <span className="text-sm font-medium">Add Item</span>
      </button>
      <button className="flex gap-2 items-center justify-center p-2 rounded-lg bg-base-200 text-neutral hover:bg-base-300 transition">
        <FaBoxOpen className="text-sm" />
        <span className="text-sm font-medium">Manage Items</span>
      </button>
      <button className="flex gap-2 items-center justify-center p-2 rounded-lg bg-base-200 text-neutral hover:bg-base-300 transition">
        <FaClipboardList className="text-sm" />
        <span className="text-sm font-medium">Orders</span>
      </button>
      <button className="flex gap-2 items-center justify-center p-2 rounded-lg bg-base-200 text-neutral hover:bg-base-300 transition">
        <FaChartBar className="text-sm" />
        <span className="text-sm font-medium">Reports</span>
      </button>
    </div>
  </div>
)

const RecentOrders: FC<{ orders: Order[] }> = ({ orders }) => (
  <div className="mt-6">
    <h2 className="text-lg font-bold mb-2">Recent Orders</h2>
    {orders.map((order) => (
      <div key={order.orderId} className="card bg-white shadow-md p-4 mb-4">
        {/* Order Header */}
        <div className="flex justify-between items-center">
          <p className="font-semibold">
            Order #{order.orderId}{" "}
            {order.tableNumber ? `• Table ${order.tableNumber}` : ""}
          </p>
          <span
            className={`badge ${
              order.status === "in-progress"
                ? "badge-warning"
                : order.status === "completed"
                ? "badge-success"
                : "badge-info"
            }`}
          >
            {order.status}
          </span>
        </div>

        {/* Items List */}
        <div className="mt-2 text-sm text-gray-600">
          {order.items.map((oi, idx) => (
            <div key={idx} className="flex justify-between items-center">
              <p>
                • {oi.itemName} ×{oi.itemCount}
                {oi.selectedCustomizations?.length ? (
                  <>
                    {" "}
                    (
                    {oi.selectedCustomizations
                      .map((c) => c.optionItemName)
                      .join(", ")}
                    )
                  </>
                ) : null}
              </p>
              <span className="text-xs italic text-gray-500">{oi.status}</span>
            </div>
          ))}

          {order.extras && order.extras.length > 0 && (
            <p className="mt-1 text-xs text-gray-500">
              + Extras: {order.extras.join(", ")}
            </p>
          )}
        </div>

        {/* Total */}
        <p className="mt-2 font-semibold text-gray-800">
          Total: ₹{order.totalPrice.toFixed(2)}
        </p>

        {/* Actions */}
        <div className="flex gap-2 mt-3">
          <button className="btn btn-xs btn-success flex-1">Accept</button>
          <button className="btn btn-xs btn-warning flex-1">In Progress</button>
          <button className="btn btn-xs btn-info flex-1">Complete</button>
        </div>
      </div>
    ))}
  </div>
);


export const Dashboard = () => {
  return (
      <div className="p-4">
        <SummaryCards />
        <QuickActions />
        {/* <RecentOrders orders={orders} /> */}
        <OrdersList   />
      </div>
  )
}
