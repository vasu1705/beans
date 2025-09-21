import React, { useState } from "react"
import { FoodItem, CustomizationOption, OptionItem } from "../../services/types"
import { Link } from "react-router-dom" // You can replace with your routing library
import { FaLongArrowAltLeft, FaPlusCircle } from "react-icons/fa"
import ItemDetailsAndCustomizationModal from "../home/ItemDetailsAndCustomizationModal"

const initCustomizationOption: CustomizationOption = {
  optionOfferName: "",
  type: "checkbox",
  isRequired: false,
  description: "",
  optionOfferItemAndPrice: [],
}
export const AddFoodItem = () => {
  const [foodItem, setFoodItem] = useState<FoodItem>({
    id: Date.now(),
    name: "",
    price: 0,
    description: "",
    image: "",
    totalItemPrice: 0,
    customizationOptions: [initCustomizationOption],
    count: 1,
  })
  const [
    showItemDetailsAndCustomizationModal,
    setShowItemDetailsAndCustomizationModal,
  ] = useState<{
    visible: boolean
    value: undefined | FoodItem
  }>({
    visible: false,
    value: undefined,
  })

  const addCustomizationOption = () => {
    let obj = JSON.parse(JSON.stringify(foodItem))
    obj.customizationOptions.push(initCustomizationOption)
    setFoodItem(obj)
  }

  const handleFoodDetailChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    if (name === "price") {
      setFoodItem((prev) => ({
        ...prev,
        [name]: Number(value),
        totalItemPrice: Number(value),
      }))
    }
    else{
      setFoodItem((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  const handleCustomizationOptionChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
    index: number
  ) => {
    const { name, value } = e.target
    const updatedOptions: CustomizationOption[] = [
      ...foodItem.customizationOptions!,
    ]
    if (name === "type") {
      updatedOptions[index].type = value === "checkbox" ? "checkbox" : "radio"
    } else {
      updatedOptions[index][name] = value
    }
    setFoodItem((prev) => ({
      ...prev,
      customizationOptions: updatedOptions,
    }))
  }

  const handleCustomizationOptionOfferItemAndPriceChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    customizationIndex: number,
    optionIndex: number
  ) => {
    const { name, value } = e.target
    const updatedOptions: CustomizationOption[] = [
      ...foodItem.customizationOptions!,
    ]
    updatedOptions[customizationIndex].optionOfferItemAndPrice[optionIndex][
      name
    ] = value
    setFoodItem((prev) => ({
      ...prev,
      customizationOptions: updatedOptions,
    }))
  }

  const handleAddOptionItem = (customizationIndex: number) => {
    const updatedOptions: CustomizationOption[] = [
      ...foodItem.customizationOptions!,
    ]
    updatedOptions[customizationIndex].optionOfferItemAndPrice.push({
      optionItemName: "",
      optionItemPrice: "",
      optionItemSelected: false,
    })
    setFoodItem((prev) => ({
      ...prev,
      customizationOptions: updatedOptions,
    }))
  }

  const handleSaveFoodItem = () => {
    console.log("Food Item Created: ", foodItem)
  }

  return (
    <div className="bg-base-300 min-h-screen">
      {/* Hero Header with Back Button */}
      <div className="flex bg-gradient-to-r from-orange-300 via-pink-300 to-rose-300 items-center justify-start gap-4 p-3 shadow-md fixed w-full top-0 z-10">
        <Link to="/" className="btn btn-sm btn-ghost ">
          <FaLongArrowAltLeft className="size-5" />
        </Link>
        <h1 className="text-xl font-semibold ">Add Food Item</h1>
      </div>

      {/* Form Container */}
      <div className="pt-20 p-6 max-w-4xl mx-auto">
        {/* Food Item Details Section */}
        <div className="bg-base-100 p-6 rounded-xl shadow-lg ">
          <h2 className="text-xl font-semibold mb-4">Food Item Details</h2>
          <fieldset className="mb-4">
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Enter food item name"
              name="name"
              value={foodItem.name}
              onChange={handleFoodDetailChange}
            />
          </fieldset>
          <fieldset className="mb-4">
            <label className="block text-sm font-medium mb-1">Price</label>
            <input
              type="number"
              className="input w-full"
              placeholder="Enter price"
              name="price"
              value={foodItem.price}
              onChange={handleFoodDetailChange}
            />
          </fieldset>
          <fieldset className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              placeholder="Enter description"
              className="textarea textarea-md w-full"
              name="description"
              value={foodItem.description}
              onChange={handleFoodDetailChange}
            ></textarea>
          </fieldset>
          <fieldset className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Display Image
            </label>
            <input
              type="file"
              className="file-input file-input-md w-full"
              name="image"
              onChange={(e) => {
                if (e.target.files?.length) {
                  setFoodItem((prev) => ({
                    ...prev,
                    image: URL.createObjectURL(e.target.files![0]),
                  }))
                }
              }}
            />
          </fieldset>
        </div>

        {/* Customization Options Section */}
        {foodItem?.customizationOptions?.map((customizationOption, idx) => (
          <div className="bg-base-100 p-6 mt-6 rounded-xl shadow-lg">
            <div className="flex justify-between items-center mb-2 ">
              <h2 className="text-xl font-semibold ">Customization Options</h2>
              {foodItem?.customizationOptions?.length! - 1 === idx && (
                <button
                  className="p-2"
                  onClick={addCustomizationOption}
                  data-tooltip="Add new customization option"
                >
                  <FaPlusCircle />{" "}
                </button>
              )}
            </div>
            <fieldset className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Option Name
              </label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter customization name"
                name="optionOfferName"
                value={customizationOption.optionOfferName}
                onChange={(e) => handleCustomizationOptionChange(e, idx)}
              />
            </fieldset>
            <fieldset className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Description
              </label>
              <textarea
                placeholder="Enter customization details"
                className="textarea textarea-md w-full"
                name="description"
                value={customizationOption.description}
                onChange={(e) => handleCustomizationOptionChange(e, idx)}
              ></textarea>
            </fieldset>
            {/* Customization Type */}
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm font-medium">Choose Type</span>
              <select
                className="select select-sm"
                name="type"
                value={customizationOption.type}
                onChange={(e) => handleCustomizationOptionChange(e, idx)}
              >
                <option value="checkbox">Checkbox</option>
                <option value="radio">Radio Button</option>
              </select>
            </div>

            {/* Customization Options List */}
            <div className="flex flex-col space-y-4 border-t-1 border-gray-300 pt-2">
              {customizationOption.optionOfferItemAndPrice.length != 0 && (
                <div className="flex">
                  <span className="text-sm font-medium w-4/5">option name</span>
                  <span className="text-sm font-medium w-1/5">Price</span>
                </div>
              )}
              {customizationOption.optionOfferItemAndPrice.map(
                (option, index) => (
                  <div key={index} className="flex items-center gap-2 w-full">
                    <input
                      type="text"
                      name="optionItemName"
                      className="input input-sm w-4/5"
                      placeholder="Option Name"
                      value={option.optionItemName}
                      onChange={(e) => {
                        handleCustomizationOptionOfferItemAndPriceChange(
                          e,
                          idx,
                          index
                        )
                      }}
                    />
                    <input
                      type="number"
                      name="optionItemPrice"
                      className="input input-sm w-1/5"
                      placeholder="Price"
                      value={option.optionItemPrice}
                      onChange={(e) => {
                        const updatedOptions = [
                          ...customizationOption.optionOfferItemAndPrice,
                        ]
                        updatedOptions[index].optionItemPrice = e.target.value
                        handleCustomizationOptionOfferItemAndPriceChange(
                          e,
                          idx,
                          index
                        )
                      }}
                    />
                  </div>
                )
              )}
              {/* Add Option Item Button with Tooltip */}
              <button
                type="button"
                className="btn btn-outline btn-sm text-neutral hover:text-white flex items-center gap-2 "
                onClick={() => {
                  handleAddOptionItem(idx)
                }}
                data-tooltip="Add new option item"
              >
                <span>+ Add option item</span>
              </button>
            </div>
          </div>
        ))}

        <ItemDetailsAndCustomizationModal
          setShowItemDetailsAndCustomizationModal={
            setShowItemDetailsAndCustomizationModal
          }
          showItemDetailsAndCustomizationModal={
            showItemDetailsAndCustomizationModal
          }
        />
        <div className="mt-6 flex justify-center gap-2">
          {/* Preview Button (secondary) */}
          <button
            className="max-w-xs py-2 px-4 rounded-xl 
               bg-gray-100 text-gray-700 font-medium 
               border border-gray-300 shadow-sm
               hover:bg-gray-200 transition w-2/5"
            onClick={() => {
              setShowItemDetailsAndCustomizationModal({
                visible: true,
                value: foodItem,
              })
            }}
          >
            Preview
          </button>

          {/* Save Button (primary) */}
          <button
            className="w-3/5 max-w-xs py-2 px-4 rounded-xl 
               bg-gradient-to-r from-pink-400 via-red-400 to-orange-400 
               text-white font-semibold shadow-md 
               hover:scale-105 transition-transform"
            onClick={handleSaveFoodItem}
          >
            Save Food Item
          </button>
        </div>
      </div>
    </div>
  )
}
