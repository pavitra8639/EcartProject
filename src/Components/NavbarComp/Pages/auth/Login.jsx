import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { _Auth } from "../../../../Backend/BackendBass";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { RiEye2Fill, RiEyeFill, RiEyeOffFill } from "react-icons/ri";

const Login = () => {
  const [showPassword,setShowPassword]=useState(false)

  let [formdata, setFormData] = useState({
    email: "",
    password: ""
  })

  //Navigate
  let navigate = useNavigate()

  function handleinput(e) {
    setFormData({
      ...formdata,
      [e.target.name]: e.target.value
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      let user = await signInWithEmailAndPassword(_Auth, formdata.email, formdata.password)

      if (user.user.emailVerified === true) {
        toast.success("Login successfully")
        navigate('/')
         
      }
      else {
        toast.error("Please verify your email")
      }

    } catch (err) {
      toast.error(err.message)

      setFormData({
        email: "",
        password: ""
      })
    }
  }

  return (
    <div className="flex items-center justify-center h-[calc(100vh-75px)] bg-gradient-to-r from-purple-400 to-blue-400">

      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>

          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            value={formdata.email}
            onChange={handleinput}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
         <div className="relative">
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            name="password"
            value={formdata.password}
            onChange={handleinput}
            className="w-full py-3 pr-10 pl-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          /> 
          <span onClick={()=>setShowPassword(!showPassword)} className="absolute inset-y-0 right-3  flex items-center cursor-pointer text-gray-600">
            {showPassword ? <RiEyeOffFill/> : <RiEyeFill/>}
          </span>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
          > 
            Login
          </button>

        </form>

        <p className="text-center text-sm mt-4">
          Don't have an account?
          <Link to="/Register">
            <span className="text-blue-500 cursor-pointer ml-1">
              Register
            </span>
          </Link>
        </p>

      </div>

    </div>
  )
}

export default Login