import React, { useEffect, useState } from "react"
import { FaMinus, FaPlus } from "react-icons/fa"
import { FaIndianRupeeSign } from "react-icons/fa6"
import { HiCurrencyRupee, HiOutlineBookmark } from "react-icons/hi"
import { PiShareFatLight } from "react-icons/pi"
import { CustomizationOption, FoodItem, OptionItem } from "../../services/types"
import { AppDispatch } from "../../services/store"
import { useDispatch } from "react-redux"
import { addFoodItemToOrderList } from "../../services/features/orderSlice"

const ItemDetailsAndCustomizationModal = ({
  showItemDetailsAndCustomizationModal,
  setShowItemDetailsAndCustomizationModal,
}) => {
  const [orderItem, setOrderItem] = useState<FoodItem | undefined>(undefined)
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    setOrderItem(showItemDetailsAndCustomizationModal?.value)
  }, [showItemDetailsAndCustomizationModal?.value])

  const increaseItemCount = (operation: string) => {
    let obj: FoodItem = JSON.parse(JSON.stringify(orderItem))
    if (obj.count != undefined) {
      if (operation == "Add") {
        obj.count += 1
        obj.totalItemPrice += obj.price
      } else {
        obj.count -= 1
        obj.totalItemPrice -= obj.price
        if (obj.count == 0) {
          setShowItemDetailsAndCustomizationModal((prev) => ({
            ...prev,
            visible: false,
          }))
        }
      }
    } else {
      obj!.count = 0
    }
    setOrderItem(obj)
  }
  return (
    <dialog
      id="my_modal"
      className="modal modal-bottom bg-transparent"
      open={showItemDetailsAndCustomizationModal?.visible}
    >
      <div className="modal-box h-screen flex flex-col justify-end m-0 p-0 bg-transparent">
        <div
          className="h-[50vh] "
          onClick={() => {
            setShowItemDetailsAndCustomizationModal((prev) => ({
              ...prev,
              visible: false,
            }))
          }}
        ></div>
        <div className="flex flex-col max-h-[60vh] overflow-y-auto bg-base-300 px-2 py-4 mb-10 rounded-lg">
          {/* Item Display */}
          <div className="bg-base-100 p-2 rounded-lg">
            <img src={orderItem?.image} alt="food" className="rounded-xl" />
            {/* Full Name */}
            <div className="flex justify-between items-center mt-4">
              <h2 className="text-lg font-semibold">Deluxe Veggie Pizza</h2>
              <div className="flex gap-2">
                <button className="btn btn-circle btn-sm bg-base-100 shadow-xl">
                  <HiOutlineBookmark />
                </button>
                <button className="btn btn-circle btn-sm bg-base-100 shadow-xl">
                  <PiShareFatLight />
                </button>
              </div>
            </div>
            {/* Ordered Rate */}
            <div className="flex text-xs items-center gap-2 font-extralight ">
              <progress
                className="progress progress-primary w-[10vw]"
                value="70"
                max="100"
              ></progress>
              {"Highly Ordered"}
            </div>
            {/* Description */}
            <p className="text-xs mt-2 font-medium">{orderItem?.description}</p>
          </div>
          {orderItem?.customizationOptions?.map((item, index) => (
            <ItemDetailsAndCustomizationListItem
              customizationOption={item}
              key={`ItemDetailsAndCustomizationListItem_${index}`}
              setOrderItem={setOrderItem}
              orderItem={orderItem}
            />
          ))}
        </div>

        {/* Item Count/Add overlay */}
        <div className="h-fit flex p-2 w-full bg-white z-100 absolute justify-around gap-2">
          <div className="flex flex-3 p-1 items-center justify-around bg-green-100 border-green-400 border rounded-lg shadow">
            <FaMinus
              className="text-xs text-green-600 "
              onClick={() => {
                increaseItemCount("Minus")
              }}
            />
            <span className="text-sm font-bold">{orderItem?.count}</span>
            <FaPlus
              className="text-xs  text-green-600 "
              onClick={() => {
                increaseItemCount("Add")
              }}
            />
          </div>
          <button
            className="btn text-white bg-green-700 border-green-700 rounded-lg btn-success flex-7 mx-2 gap-0"
            onClick={() => {
              dispatch(addFoodItemToOrderList(orderItem!))
              setShowItemDetailsAndCustomizationModal(prev => ({...prev,visible:false}))
            }}
          >
            Add item - <FaIndianRupeeSign />
            {orderItem?.totalItemPrice}
          </button>
        </div>
      </div>
    </dialog>
  )
}

const ItemDetailsAndCustomizationListItem = ({
  customizationOption,
  setOrderItem,
  orderItem,
}: {
  customizationOption: CustomizationOption
  setOrderItem: React.Dispatch<React.SetStateAction<FoodItem | undefined>>
  orderItem: FoodItem
}) => {
  const [selectedValues, setSelectedValues] = useState<String[]>([])

  const updateValue = (it: OptionItem) => {
    let obj: FoodItem = JSON.parse(JSON.stringify(orderItem))
    obj.customizationOptions?.map((_customizationOption) => {
      if (
        _customizationOption.optionOfferName ==
        customizationOption.optionOfferName
      ) {
        _customizationOption?.optionOfferItemAndPrice.map(
          (optionOfferItemAndPrice) => {
            if (optionOfferItemAndPrice.optionItemName == it.optionItemName) {
              if (optionOfferItemAndPrice.optionItemSelected) {
                obj.totalItemPrice -= Number(
                  optionOfferItemAndPrice.optionItemPrice
                )
              } else {
                obj.totalItemPrice += Number(
                  optionOfferItemAndPrice.optionItemPrice
                )
              }

              optionOfferItemAndPrice.optionItemSelected =
                !optionOfferItemAndPrice.optionItemSelected
            }
          }
        )
      }
    })
    setOrderItem(obj)
  }

  useEffect(() => {
    console.log(orderItem)
  }, [orderItem])
  return (
    <div className="bg-base-100 p-2 rounded-lg mt-2 mb-2">
      {/* Customization Options */}
      <h4 className="text-sm font-medium">
        {customizationOption.optionOfferName}
      </h4>
      <h4 className="text-xs">{customizationOption.description}</h4>
      <div className="divider m-1 p-0"></div>
      {customizationOption.type == "checkbox" && (
        <div className="flex flex-col gap-4">
          {customizationOption.optionOfferItemAndPrice.map((it, index) => (
            <div
              className="flex justify-between items-center"
              onClick={() => {
                // console.log(orderItem,customizationOption,it)
                // const value = selectedValues.includes(it.optionItemName)
                //   ? selectedValues.filter((item) => item != it.optionItemName)
                //   : [...selectedValues, it.optionItemName]
                // setSelectedValues(value)
                updateValue(it)
              }}
              key={`optionOfferItemAndPrice${it.optionItemName}${index}`}
            >
              <p className=" text-sm font-medium ">{it.optionItemName}</p>
              <div className="flex items-center text-sm font-medium">
                <FaIndianRupeeSign className="text-xs" />
                {it.optionItemPrice}
                <input
                  type="checkbox"
                  className="checkbox checkbox-sm checkbox-success ml-2"
                  checked={it?.optionItemSelected}
                  onChange={() => {}}
                />
              </div>
            </div>
          ))}
        </div>
      )}
      {customizationOption.type == "radio" && (
        <div className="flex flex-col gap-4">
          {customizationOption.optionOfferItemAndPrice.map((it, index) => (
            <div
              key={`optionOfferItemAndPrice${it.optionItemName}${index}`}
              className="flex justify-between items-center"
              onClick={() => {
                setSelectedValues([it.optionItemName])
              }}
            >
              <p className=" text-sm font-medium ">{it.optionItemName}</p>
              <div className="flex items-center text-sm font-medium">
                <FaIndianRupeeSign className="text-xs" />
                {it.optionItemPrice}
                <input
                  type="radio"
                  className="radio radio-sm radio-success ml-2"
                  checked={it?.optionItemSelected}
                  onChange={() => {}}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ItemDetailsAndCustomizationModal
