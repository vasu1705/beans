import React, { useEffect, useState } from "react"
import { BiHide } from "react-icons/bi"
import { BsArrowRepeat } from "react-icons/bs"
import {
  FaArrowDown,
  FaBell,
  FaFilter,
  FaPepperHot,
  FaPhone,
  FaPlusCircle,
  FaSave,
  FaShare,
  FaStar,
  FaTable,
} from "react-icons/fa"
import { FaArrowTurnDown, FaCircleArrowRight } from "react-icons/fa6"
import {
  HiBookmark,
  HiCurrencyRupee,
  HiOutlineBookmark,
  HiOutlineShare,
} from "react-icons/hi"
import { LuBaby, LuEggOff } from "react-icons/lu"
import { MdOutlineGroup, MdTableBar } from "react-icons/md"
import { PiShareFatLight } from "react-icons/pi"
import { VscSettings } from "react-icons/vsc"
import ItemDetailsAndCustomizationModal from "../components/home/ItemDetailsAndCustomizationModal"
import { CustomizationOption, FoodItem, FoodSections } from "../services/types"
import { useSelector } from "react-redux"
import { RootState } from "../services/store"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()
  const foodSections: FoodSections = [
    {
      sectionTitle: "FLAT 50% OFF",
      sectionDescription: "Limited time offers with 50% off!",
      items: [
        {
          id: 1,
          name: "Butter Paneer Masala Rice Bowl + Gulab Jamun",
          price: 499,
          description: "Delicious creamy paneer served with rice and dessert.",
          image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641",
          customizationOptions: [
            {
              optionOfferName: "Make It a Meal",
              type: "checkbox",
              isRequired: false,
              maxSelectable: 2,
              description: "Upgrade your order with sides and a drink.",
              optionOfferItemAndPrice: [
                {
                  optionItemName: "Teekha Chaska (2 packets)",
                  optionItemPrice: "20",
                  optionItemSelected: false,
                },
                {
                  optionItemName: "Coke (300ml)",
                  optionItemPrice: "30",
                  optionItemSelected: false,
                },
                {
                  optionItemName: "French Fries",
                  optionItemPrice: "40",
                  optionItemSelected: false,
                },
              ],
            },
            {
              optionOfferName: "Choose Spice Level",
              type: "radio",
              isRequired: true,
              description: "Select your preferred spice level.",
              optionOfferItemAndPrice: [
                {
                  optionItemName: "Mild",
                  optionItemPrice: "0",
                  optionItemSelected: false,
                },
                {
                  optionItemName: "Medium",
                  optionItemPrice: "0",
                  optionItemSelected: false,
                },
                {
                  optionItemName: "Spicy",
                  optionItemPrice: "0",
                  optionItemSelected: false,
                },
              ],
            },
          ],
          count: 1,
          totalItemPrice: 499,
        },
        {
          id: 2,
          name: "Chole Protein Bowl + Mango Lassi",
          price: 399,
          description: "Protein-rich chole bowl paired with mango lassi.",
          image:
            "https://plus.unsplash.com/premium_photo-1695456064603-aa7568121827",
          count: 1,
          // No customizationOptions for this item
          totalItemPrice: 399,
        },
      ],
    },
    {
      sectionTitle: "Recommended for you",
      items: [
        {
          id: 3,
          name: "Grilled Veggie Wrap + Lemonade",
          price: 349,
          description:
            "Healthy and tasty grilled veggie wrap with fresh lemonade.",
          image:
            "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V3JhcHxlbnwwfHwwfHx8MA%3D%3D",
          customizationOptions: [
            {
              optionOfferName: "Add Extra Toppings",
              type: "checkbox",
              isRequired: false,
              maxSelectable: 3,
              description: "Customize your wrap with extra toppings.",
              optionOfferItemAndPrice: [
                {
                  optionItemName: "Extra Cheese",
                  optionItemPrice: "15",
                  optionItemSelected: false,
                },
                {
                  optionItemName: "Olives",
                  optionItemPrice: "10",
                  optionItemSelected: false,
                },
                {
                  optionItemName: "Jalapenos",
                  optionItemPrice: "10",
                  optionItemSelected: false,
                },
                {
                  optionItemName: "Mushrooms",
                  optionItemPrice: "12",
                  optionItemSelected: false,
                },
              ],
            },
          ],
          count: 1,
          totalItemPrice: 349,
        },
      ],
    },
  ]
  const itemsAddedToCart = useSelector(
    (state: RootState) => state.order.foodItems
  )

  const [closedSections, setClosedSections] = React.useState<String[]>([])

  const toggleSection = (sectionTitle: String) => {
    if (closedSections.includes(sectionTitle)) {
      setClosedSections(
        closedSections.filter((title) => title !== sectionTitle)
      )
    } else {
      setClosedSections([...closedSections, sectionTitle])
    }
  }

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

  return (
    <div className="w-full h-full bg-base-200">
      {/* Hero Section */}
      <div
        className="h-[50vh] "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=962&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="flex flex-col h-full justify-end  items-center bg-gradient-to-b from-transparent to-black/80 via-black/30 ">
          <div className="w-full p-2">
            <div className="flex justify-between items-center gap-4">
              <div className="flex flex-col flex-8">
                {/* Resturant Name */}
                <h1 className="text-2xl text-white font-playfairdisplay font-bold">
                  Pizzerria
                </h1>
                <p className="text-xs text-base-100 mt-2">
                  3rd floor,Jagat Mall, Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Pariatur, adipisci.
                </p>
                <p className="text-xs text-base-100 bg-neutral/80 w-fit px-2 rounded-full mt-2">
                  Open Now | 11:30AM - 11:00PM
                </p>
              </div>
              <div className="flex flex-col w-fit flex-2 justify-center items-center h-full">
                <div className=" w-full h-fit  bg-green-700  py-1 rounded-t-lg text-base-100">
                  <div className="flex justify-center items-center gap-1 text-sm font-semibold">
                    {4.3}
                    <FaStar />
                  </div>
                </div>
                <div className=" w-full h-fit  bg-white rounded-b-xl ">
                  <div className="flex justify-center items-start text-center text-xs font-semibold">
                    {"1123"} <br />
                    Reviews
                  </div>
                </div>
              </div>
            </div>

            {/* Search Tab & Veg Only */}
            {/* <div className="flex justify-between items-center mt-4 gap-2 ">
              <label className="input w-full">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
                <input type="search" required placeholder="Search" />
              </label>
              <button className="btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="size-[1.2em]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
                Veg
              </button>
            </div> */}

            <div className="flex gap-2 -mb-6 mt-6 w-full justify-around ">
              <button className="btn shadow btn-soft btn-default rounded-xl px-8 font-medium bg-base-100">
                <MdTableBar className="text-secondary" />
                Book table
              </button>
              <button className="btn shadow rounded-xl btn-default btn-soft font-medium bg-base-100">
                <MdOutlineGroup className="text-secondary" /> Group order
              </button>
              <button className="btn shadow rounded-xl btn-default btn-soft font-medium bg-base-100">
                <FaBell className="text-secondary" />
                call
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* sorting and filters Section */}
      <div className="bg-base-100 h-1 w-full mt-5"></div>
      <div className="flex w-full p-2 py-3 overflow-x-auto gap-2 sticky z-100 top-0 bg-base-100">
        <button className="btn btn-outline bg-base-100  btn-xs px-4 ">
          <VscSettings />
          Filters <FaArrowDown />
        </button>
        <button className="btn btn-outline bg-base-100 btn-xs px-4 ">
          <BiHide />
          Hide non veg
        </button>
        <button className="btn btn-outline bg-base-100 btn-xs px-4 ">
          <BsArrowRepeat />
          Highly reordered
        </button>
        <button className="btn btn-outline bg-base-100 btn-xs px-4 ">
          <FaPepperHot />
          Spicy
        </button>
        <button className="btn btn-outline bg-base-100 btn-xs px-4 ">
          <LuBaby />
          Kids-choice
        </button>
      </div>

      {/* Food List */}
      {foodSections.map((section, index) => (
        <div
          tabIndex={0}
          className={
            "collapse collapse-arrow bg-base-100 border-base-300 border " +
            (closedSections.includes(section.sectionTitle)
              ? " collapse-close"
              : " collapse-open" + ((index+1==foodSections?.length && itemsAddedToCart?.length!=0) ? " mb-8":" " ))
          }
          key={`foodSectionkey${index}`}
        >
          <div
            className="collapse-title font-semibold"
            onClick={() => toggleSection(section.sectionTitle)}
          >
            {section.sectionTitle}
          </div>
          <div className="collapse-content text-sm p-2 bg-base-200">
            {/* food Item card */}
            {section.items.map((item, index) =>
              FoodItemCard(item, setShowItemDetailsAndCustomizationModal, index)
            )}
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

      {showItemDetailsAndCustomizationModal?.visible == false &&
        itemsAddedToCart?.length > 0 && (
          <div
            className="fixed bottom-0 left-0 w-[98vw] m-1 h-[6vh] z-[999] bg-green-700 rounded-2xl  text-white px-4 py-1 flex flex-col justify-between items-center shadow-md"
            onClick={() => {
              navigate("/order")
            }}
          >
            <p className="flex items-center gap-2 text font-medium">
              {itemsAddedToCart.length} item{itemsAddedToCart.length > 1 && "s"}{" "}
              added <FaCircleArrowRight />
            </p>
            <p className="text-sm">view cart</p>
          </div>
        )}
    </div>
  )
}

const FoodItemCard = (item, setShowItemDetailsAndCustomizationModal, index) => {
  return (
    <div key={index} className="flex flex-col gap-1">
      <div className="flex w-full bg-base-100 rounded-md py-2 px-1">
        {/* food Description */}
        <div
          className="flex flex-8 flex-col p-1 gap-1"
          onClick={() => {
            setShowItemDetailsAndCustomizationModal((prev) => ({
              value: item,
              visible: true,
            }))
          }}
        >
          <LuEggOff />
          <p className="font-semibold">{item.name || ""}</p>
          <span className="text-sm font-medium text-primary flex gap-1 items-center">
            <HiCurrencyRupee />
            {item.price || 0}
          </span>
          <p className="text-xs overflow-ellipsis line-clamp-2 ">
            {item.description || ""}
          </p>

          <div className="flex gap-2">
            <button className="btn btn-circle btn-sm bg-base-100 shadow-xl">
              <HiOutlineBookmark />
            </button>
            <button className="btn btn-circle btn-sm bg-base-100 shadow-xl">
              <PiShareFatLight />
            </button>
          </div>
        </div>
        {/* food image */}
        <div className="flex flex-col flex-4  items-center">
          <img
            src={item.image}
            alt="food"
            style={{ height: "120px", width: "150px" }}
            className="rounded-xl"
          />
          <button
            className="btn btn-sm btn-soft bg-green-50 px-4 text-green-600 -mt-4 w-fit"
            onClick={() => {
              setShowItemDetailsAndCustomizationModal((prev) => ({
                value: item,
                visible: true,
              }))
            }}
          >
            ADD <FaPlusCircle />
          </button>
        </div>
      </div>
      <div className="divider m-0 p-0 h-0.5 mb-1"></div>
    </div>
  )
}

export default Home
