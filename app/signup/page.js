"use client"
import { useEffect, useState } from "react";
import { supabase } from "../lib/helper/supabaseClient";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaSpinner } from "react-icons/fa";
import Link from "next/link";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(null);
  const [disable, setDisable] = useState(true)

  const emailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    setDisable(!value);
  }
  const signUpUser = async (event) => {
    event.preventDefault();
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setLoading(false);
      console.log(error.message);
      toast(error.message, {
        type: "error",
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
    } else {
      setLoading(false);
      toast("User created successfully", {
        type: "success",
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
      window.location.href = "/login";
      console.log(data);
    }
  };
  useEffect(() => {
    document.title = "Transloom | Sign Up";
    document
      .querySelector('meta[name="description"]')
      .setAttribute(
        "content",
        "Sign up to Transloom to start translating text and documents from one language to another."
      );
  }, []);
  return (
    <div className="bg-gray-800 min-h-svh md:h-fit lg:min-h-svh flex items-center justify-center">
      {" "}
      <div className="p-8 lg:w-1/2 mx-auto">
        {" "}
        <div className="bg-white rounded-t-lg p-8">
          <Link href="/">
            <h3 className="uppercase text-gray-800 text-center text-2xl lg:text-4xl md:text-3xl font-bold">trans.<span className="text-[#52796f]">loom</span></h3>
          </Link>
          <br />
          <h2 className="text-center text-xs lg:text-sm text-gray-700 font-semibold uppercase">
            Create an account
          </h2>{" "}
        </div>{" "}
        <div className="bg-gray-100 rounded-b-lg py-12 px-4 lg:px-24">
          {" "}
          <p className="text-center lg:text-lg text-gray-800 font-medium">
            {" "}
            Sign up with email and password{" "}
          </p>{" "}
          <div className="mt-6">
            {" "}
            <div className="relative">
              {" "}
              <input
                className="appearance-none border pl-12 border-gray-200 shadow-sm focus:shadow-md focus:placeholder-gray-600 focus:border-blue-500 transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                onChange={emailChange}
              />{" "}
              <div className="absolute left-0 inset-y-0 flex items-center">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 ml-3 text-[#52796f] opacity-80 p-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  {" "}
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />{" "}
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />{" "}
                </svg>{" "}
              </div>{" "}
            </div>{" "}
            <div className="relative mt-3">
              {" "}
              <input
                className="appearance-none border pl-12 border-gray-200 shadow-sm focus:shadow-md focus:placeholder-gray-600 focus:border-blue-500 transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />{" "}
              <div className="absolute left-0 inset-y-0 flex items-center">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 ml-3 text-[#52796f] opacity-80 p-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  {" "}
                  <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />{" "}
                </svg>{" "}
              </div>{" "}
            </div>{" "}
            <div className="flex flex-col gap-3 items-center justify-center mt-8">
              {" "}
              <button
                onClick={signUpUser}
                disabled={loading || disable}
                className={`
                text-white py-2 px-4 uppercase rounded bg-[#52796f] shadow hover:shadow-lg font-medium transition transhtmlForm hover:-translate-y-0.5 disabled:cursor-not-allowed
                ${loading ? "cursor-wait" : " cursor-pointer"}
                `}
              >
                {
                  loading ? (
                    <FaSpinner className="animate-spin text-white text-xl" />
                  ) : (
                    "CREATE ACCOUNT"
                  )
                }
              </button>{" "}
              <Link href="/login">
                <p className=" font-medium text-sm text-[#52796f]">Already have an account? Login</p>
              </Link>
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
