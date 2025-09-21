import React, { useState } from "react"
import { Order } from "../../services/types"
import { FaArrowLeft, FaArrowRight, FaCheckCircle } from "react-icons/fa"

export const OrdersList = () => {
  const order: Order[] = [
    {
      orderId: 1001,
      tableNumber: 5,
      customerName: "John Doe",
      items: [
        {
          itemName: "Margherita Pizza",
          itemId: 1,
          itemCount: 2,
          itemPrice: 9.99,
          status: "done",
          selectedCustomizations: [
            {
              optionItemName: "Extra Cheese",
              optionItemPrice: "1.5",
              optionItemSelected: true,
            },
            {
              optionItemName: "Olives",
              optionItemPrice: "0.99",
              optionItemSelected: true,
            },
          ],
        },
        {
          itemName: "Coke",
          itemId: 2,
          itemCount: 1,
          itemPrice: 1.99,
          status: "pending",
        },
      ],
      extras: ["Water", "Ketchup"],
      totalPrice: 9.99 * 2 + 1.5 + 0.99 + 1.99, // 23.46
      status: "in-progress",
      createdAt: new Date("2025-09-14T12:30:00"),
    },
    {
      orderId: 1001,
      tableNumber: 5,
      customerName: "John Doe",
      items: [
        {
          itemName: "Margherita Pizza",
          itemId: 1,
          itemCount: 2,
          itemPrice: 9.99,
          status: "done",
          selectedCustomizations: [
            {
              optionItemName: "Extra Cheese",
              optionItemPrice: "1.5",
              optionItemSelected: true,
            },
            {
              optionItemName: "Olives",
              optionItemPrice: "0.99",
              optionItemSelected: true,
            },
          ],
        },
        {
          itemName: "Coke",
          itemId: 2,
          itemCount: 1,
          itemPrice: 1.99,
          status: "pending",
        },
      ],
      extras: ["Water", "Ketchup"],
      totalPrice: 9.99 * 2 + 1.5 + 0.99 + 1.99, // 23.46
      status: "in-progress",
      createdAt: new Date("2025-09-14T12:30:00"),
    },
  ]
  return (
    <div className="my-2 bg-base-100 py-2 rounded-lg shadow-lg px-1 space-y-">
      <CollabsibleOrderListofItems orderList={order} label={"NEW"} />
      <CollabsibleOrderListofItems orderList={order} label={"ACCEPTED"} />
      <CollabsibleOrderListofItems orderList={order} label={"DONE"} />
    </div>
  )
}

const CollabsibleOrderListofItems = ({
  orderList,
  label,
}: {
  orderList: Order[]
  label: string
}) => {
  const [openList, setOpenList] = useState(true)

  return (
    <div
      className={
        `collapse collapse-arrow ` +
        (openList ? "collapse-open" : "collapse-close")
      }
    >
      <div
        className={
          "collapse-title font-semibold text-sm  " +
          (label === "NEW"
            ? "bg-red-100"
            : label === "ACCEPTED"
            ? "bg-blue-200"
            : "bg-green-100")
        }
        onClick={() => {
          setOpenList(!openList)
        }}
      >
        {label}
      </div>
      <div className="collapse-content text-sm p-0">
        {orderList.map((order, index) => (
          <div className="flex w-full flex-col my-2 border rounded-sm  border-gray-300 shadow p-2 text-sm font-medium ">
            <div className="flex justify-between items-center">
              <span className="w-3/5">
                {order.customerName} - Table No. {order?.tableNumber}
              </span>
              <span className="w-2/5 text-right">{order.status}</span>
            </div>
            <div className=" flex flex-col space-y-1 mt-1">
              {order?.items.map((item, idx) => (
                <div className="flex justify-between items-center border-b border-gray-200 p-1 text-xs font-medium">
                  <span className="w-6/12 text-xs font-semibold">
                    {item.itemName} <br />{" "}
                    <span className="text-xs font-normal">
                      {item?.selectedCustomizations
                        ?.map((it) => it.optionItemName)
                        .join(" | ")}
                    </span>
                  </span>
                  <span className="w-1/12">x {item.itemCount}</span>
                  {/* <span className="w-1/12"><button className="btn btn-xs btn-circle "><FaArrowLeft/></button></span> */}
                  <span className="w-2/12 text-right">
                    <button
                      className={
                        "btn  btn-xs w-full btn-soft " +
                        (item.status === "pending"
                          ? "btn-warning"
                          : "btn-success")
                      }
                    >
                      {item.status}
                    </button>
                  </span>
                  {/* <span className="w-1/12"><button className="btn btn-xs btn-circle "><FaArrowRight/></button></span> */}
                </div>
              ))}
            </div>
            {/* Extras */}
            <div>
              {order.extras && order.extras.length > 0 && (
                <p className="mt-1 text-xs text-gray-600">
                  Extras: {order.extras.join(", ")}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
