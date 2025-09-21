import React from "react"
import { BiCategory } from "react-icons/bi"
import {
  FaArrowLeft,
  FaArrowRight,
  FaDotCircle,
  FaFile,
  FaHome,
  FaMinus,
  FaPlus,
  FaReceipt,
} from "react-icons/fa"
import {
  FaArrowLeftLong,
  FaBottleWater,
  FaIndianRupeeSign,
  FaSpoon,
} from "react-icons/fa6"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { RootState } from "../../services/store"
import { CustomizationOption, FoodItem, OptionItem } from "../../services/types"

export const OrderBilling = () => {
  const navigate = useNavigate()
  const itemsAddedInCart = useSelector(
    (state: RootState) => state.order.foodItems
  )
  return (
    <div className="flex flex-col gap-4  bg-base-300 h-screen w-screen">
      <div className="flex w-full bg-base-100 justify-between items-center text-lg font-semibold pt-4 px-4">
        <div
          className="flex-1 "
          onClick={() => {
            navigate("/")
          }}
        >
          <FaArrowLeft />
        </div>
        <div className="flex-3 flex justify-center">{"Order Summary"}</div>
        <div className="flex-1 flex justify-end">
          <FaHome />
        </div>
      </div>

      {/* Customer Details */}
      {/* <div className="bg-base-100 rounded-lg mx-2 p-2">
      </div> */}
      
      <div className="flex flex-col gap-4 h-[86vh] pb-6 overflow-y-auto">
        <div className="bg-base-100 rounded-lg mx-2">
        {itemsAddedInCart?.map((foodItem: FoodItem) => (
          <div className="flex p-2 justify-between gap-1">
            {/* Image/typeoption */}
            <div className="pr-1 w-4  pt-1">
              {/* <img
              className="rounded-md"
              src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2571&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            /> */}
            </div>
            <div className=" flex-6 text-sm font-medium">
              {foodItem.name}
              <br />
              {foodItem?.customizationOptions?.map(
                (customizationOption: CustomizationOption) =>
                  customizationOption.optionOfferItemAndPrice?.map(
                    (optionOfferItemAndPrice: OptionItem) => (
                      <div className="w-full m-0 p-0 space-y-0">
                        {optionOfferItemAndPrice?.optionItemSelected && (
                          <span className="text-xs m-0 p-0 space-y-0 font-medium text-gray-600">
                            {optionOfferItemAndPrice?.optionItemName}
                          </span>
                        )}
                      </div>
                    )
                  )
              )}
            </div>
            <div className="flex flex-col justify-between">
              <div className="flex p-1 items-center gap-4 justify-around w-fit bg-green-50 border-green-400 border rounded-lg shadow">
                <FaMinus className=" size-2.5 text-green-600 " />
                <span className="text-xs font-bold">{foodItem.count}</span>
                <FaPlus className="size-2.5  text-green-600 " />
              </div>
              <span className="flex items-center text-sm mt-1 font-medium pr-1 justify-end">
                <FaIndianRupeeSign className="size-3 align-text-bottom" />
                {foodItem?.totalItemPrice}
              </span>
            </div>
          </div>
        ))}
       

        {/* Add more items button */}
        <div className="flex gap-4 items-center font-semibold text-primary text-xs p-2">
          <FaPlus className="size-2.5" />
          Add more items
        </div>
        <div className="flex gap-4 items-center font-semibold text-gray-600 text-xs p-2 overflow-x-auto">
          <button className="btn btn-xs btn-outline border-gray-300">
            <FaFile /> Add a note for the resturant
          </button>
          <button className="btn btn-xs btn-outline border-gray-300">
            <FaSpoon /> Send cutlery
          </button>
          <button className="btn btn-xs btn-outline border-gray-300">
            <FaBottleWater /> Mineral water bottle
          </button>
        </div>

        {/* GST Bill section */}
      </div>
      {/* Frequently Order Section */}
      <div className="flex flex-col bg-base-100 rounded-lg mx-2 p-2 gap-3 pb-4">
        <div className="flex text-sm items-center gap-6 font-medium">
          <BiCategory className="size-4" /> Complete you meal with
        </div>
        <div className="flex overflow-x-auto gap-2 w-full">
          <div className="flex flex-col min-w-38 justify-center items-center p-1 rounded-lg border border-gray-200 gap-1">
            <img
              className="rounded-xl"
              src="https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGNha2V8ZW58MHx8MHx8fDA%3D"
              alt=""
              width={"100px"}
            />
            <span className="text-xs font-medium">Cream Roll</span>
            <div className="flex flex-row w-full justify-between">
              <p className="text-xs font-medium flex items-center mt-1">
                {" "}
                <FaIndianRupeeSign />
                29
              </p>
              <button className="btn btn-soft btn-secondary btn-xs px-4">
                {" "}
                Add
              </button>
            </div>
          </div>
        </div>
      </div>

     

      {/* Complete Order with previous placed orders Non-editable */}
      <div className="bg-base-100 rounded-lg mx-2 p-2">
        <div className="flex text-sm items-center gap-2 font-medium">
          <FaReceipt className="size-4" />
          Invoice
        </div>
        {itemsAddedInCart?.map((it:FoodItem)=>(
          <div className="flex p-2 justify-between gap-1">
          {/* Image/typeoption */}
          <div className="pr-1 w-4  pt-1">
            {/* <img
              className="rounded-md"
              src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2571&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            /> */}
          </div>
          <div className=" flex-6 text-xs font-medium">
            {it?.name}
            <br />
            {it?.customizationOptions?.map(
                (customizationOption: CustomizationOption) =>
                  customizationOption.optionOfferItemAndPrice?.map(
                    (optionOfferItemAndPrice: OptionItem) => (
                      <div className="w-fit m-0 p-0 space-y-0">
                        {optionOfferItemAndPrice?.optionItemSelected && (
                          <span className="text-xs m-0 p-0 space-y-0 font-medium text-gray-600">
                            {optionOfferItemAndPrice?.optionItemName}
                          </span>
                        )}
                      </div>
                    )
                  )
              )}
          </div>
          <div className="flex flex-col justify-between">
            <span className="flex items-center text-sm mt-1 font-medium pr-1 justify-end">
              <FaIndianRupeeSign className="size-3 align-text-bottom" />
              {it?.totalItemPrice}
            </span>
          </div>
        </div>
        ))}
        <div className="flex p-2 justify-between gap-1">
          {/* Image/typeoption */}
          <div className="pr-1 w-4  pt-1">
            {/* <img
              className="rounded-md"
              src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2571&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            /> */}
          </div>
          <div className=" flex-6 text-xs font-medium">
            Butter Panner Masala Rice Bown + Gulab Jamun
            <br />
            <span className="text-xs font-medium text-gray-600">
              Kuboos (8-inch)
            </span>
          </div>
          <div className="flex flex-col justify-between">
            <span className="flex items-center text-sm mt-1 font-medium pr-1 justify-end">
              <FaIndianRupeeSign className="size-3 align-text-bottom" />
              299
            </span>
          </div>
        </div>
        <div className="flex p-2 justify-between gap-1">
          <div className="pr-1 w-4  pt-1"></div>
          <div className=" flex-6 text-xs font-medium">
            Butter Panner Masala Rice Bown + Gulab Jamun
            <br />
            <span className="text-xs font-medium text-gray-600">
              Kuboos (8-inch)
            </span>
          </div>
          <div className="flex flex-col justify-between">
            <span className="flex items-center text-sm mt-1 font-medium pr-1 justify-end">
              <FaIndianRupeeSign className="size-3 align-text-bottom" />
              299
            </span>
          </div>
        </div>

        {/* GST Bill section */}
      </div>
      </div>

       <div className="h-fit flex p-2 w-full bg-white z-100 absolute justify-around gap-2 bottom-0 pb-2">
        <div className="flex flex-col flex-4 justify-center p-2 bg-base-300 rounded-xl shadow-xl text-sm font-medium">
          <p>Pay using</p>
          <p>Cash / UPI / Card</p>
        </div>
        <div className="flex justify-around flex-8 bg-secondary-content p-2 rounded-xl shadow-xl">
          <div className="flex flex-col">
            <p className="text-sm font-semibold flex items-center">
              <FaIndianRupeeSign className="size-3" />
              {"640.99"}
            </p>
            <p className="text-xs font-medium flex items-center ">TOTAL</p>
          </div>
          <h4 className="flex items-center font-bold gap-2">
            Place Order <FaArrowRight />
          </h4>
        </div>
      </div>
    </div>
  )
}
