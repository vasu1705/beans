import React from "react"
import { useNavigate } from "react-router-dom"

const initalUserLogin = {
  username: "",
  phone: "",
  otp: "",
}
const LoginUser = () => {
  const [userLogin,setUserLogin] = React.useState(initalUserLogin)
  const navigate = useNavigate();
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=962&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      {/* Overlay (optional dark layer) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Centered Card */}
      <div className="relative z-10 flex items-center justify-center h-full p-2">
        <div className="bg-gray-50 p-8 rounded-lg shadow-lg max-w-md w-full text-center">
          {/* client Name & Logo  */}
          <div className="flex">
            <div className="flex-1 flex justify-start items-center">
              <p className="text-3xl text-neutral flex text-left flex-col justify-center items-start font-playfairdisplay font-semibold">
                <span>
                  Welcome
                  <br />
                  to <br />
                  {"Pizzerria"}
                </span>
              </p>
            </div>
            <div className="flex-1 flex justify-end items-center">
              <img
                src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Pizza"
                className="w-24 h-24 object-cover rounded-full border-4 border-yellow-500"
              />
            </div>
          </div>
          {/* User Info */}
          <div className="flex flex-col mt-6 gap-2 justify-center items-center">
            {/* Username */}
            <label className="input validator rounded-lg w-full ">
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
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </g>
              </svg>
              <input
                type="text"
                required
                placeholder="Username"
                pattern="[A-Za-z][A-Za-z0-9\-]*"
                title="Only letters, numbers or dash"
                value={userLogin.username}
                onChange={(e)=>setUserLogin({...userLogin,username:e.target.value})}
              />
            </label>
            {/* Phone number */}
            <label className="input validator rounded-lg w-full">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
              >
                <g fill="none">
                  <path
                    d="M7.25 11.5C6.83579 11.5 6.5 11.8358 6.5 12.25C6.5 12.6642 6.83579 13 7.25 13H8.75C9.16421 13 9.5 12.6642 9.5 12.25C9.5 11.8358 9.16421 11.5 8.75 11.5H7.25Z"
                    fill="currentColor"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 1C4.61929 1 3.5 2.11929 3.5 3.5V12.5C3.5 13.8807 4.61929 15 6 15H10C11.3807 15 12.5 13.8807 12.5 12.5V3.5C12.5 2.11929 11.3807 1 10 1H6ZM10 2.5H9.5V3C9.5 3.27614 9.27614 3.5 9 3.5H7C6.72386 3.5 6.5 3.27614 6.5 3V2.5H6C5.44771 2.5 5 2.94772 5 3.5V12.5C5 13.0523 5.44772 13.5 6 13.5H10C10.5523 13.5 11 13.0523 11 12.5V3.5C11 2.94772 10.5523 2.5 10 2.5Z"
                    fill="currentColor"
                  ></path>
                </g>
              </svg>
              <input
                type="tel"
                className="tabular-nums"
                required
                placeholder="Enter Your Phone No."
                pattern="[0-9]*"
                title="Must be 10 digits"
                value={userLogin.phone}
                onChange={(e)=>setUserLogin({...userLogin,phone:e.target.value})}
              />
            </label>
            {/* Otp */}
            <label className="input validator rounded-lg w-full">
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
                  <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                  <circle
                    cx="16.5"
                    cy="7.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                </g>
              </svg>
              <input
                type="password"
                required
                placeholder="OTP"
                value={userLogin.otp}
                onChange={(e)=>setUserLogin({...userLogin,otp:e.target.value})}
                // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
              />
            </label>
            <button className="btn btn-primary btn-soft" onClick={()=>{navigate("/")}}>Generate Otp</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginUser
