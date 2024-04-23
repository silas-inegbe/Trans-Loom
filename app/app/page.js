"use client";
import { useEffect, useState, useRef } from "react";

import { HiLanguage } from "react-icons/hi2";
import { FaMicrophone } from "react-icons/fa";
import { GoArrowSwitch } from "react-icons/go";
import { HiSpeakerWave } from "react-icons/hi2";
import { IoIosCopy } from "react-icons/io";
import { IoMdSend } from "react-icons/io";
import { Tooltip } from "react-tooltip";
import { FaSpinner } from "react-icons/fa";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { supabase } from "../lib/helper/supabaseClient";


/**
 * Renders the Home component.
 * This component displays a translation input form.
 *
 * @returns {JSX.Element} The rendered Home component.
 */
function Home() {
  const InputLanguages = ["en", "ar", "fr", "de"];
  const OutputLanguages = ["en", "ar", "fr", "de"];
  const [Input, setInput] = useState();
  const [Output, setOutput] = useState();
  const OutputRef = useRef(null);
  const router = useRouter();
  // const [Output, setOutput] = useState();
  const [activeLanguage, setActiveLanguage] = useState(InputLanguages[0]);
  const [activeOutputLanguage, setActiveOutputLanguage] = useState(
    OutputLanguages[0]
  );
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  const url = process.env.NEXT_PUBLIC_SERVER_URL;
  //   console.log("url",url);
  // input change handler
  const InputChangeHandler = (e) => {
    setInput(e.target.value);
  };

  //function that copies to clipboard
  const copyToClipboard = () => {
    if (OutputRef.current) {
      OutputRef.current.select();
      document.execCommand("copy");
      toast("Copied to clipboard", {
        type: "success",
        position: "top-center",
        autoClose: 10000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
      });
    }
  };

  // translate function
  const Translate = async () => {
    console.log("url", url);

    try {
      setLoading(true);
      setOutput("");
      const res = await axios.get(`${url}get-data`, {
        params: {
          text: Input,
          to: activeOutputLanguage,
        },
      });
      setLoading(false);
      // console.log(res.data);
      setOutput(res.data.message[0].translations[0].text);
    } catch (error) {
      // console.log(error);
      // setError(error);
      setLoading(false);
      toast(error.message, { type: "error" });
    }
  };

  // text to speech
  // const speech = new SpeechSynthesisUtterance();
  // speech.text = Output;
  // speech.volume = 1;
  // speech.rate = 1;
  // speech.pitch = 1.5;
  // speech.lang = "en-US";
  // speech.voice = speechSynthesis
  //   .getVoices()
  //   .filter((voice) => voice.lang === "en-US")[5];

  // const onSpeak = () => {
  //   speech.text = Input;
  //   window.speechSynthesis.speak(speech);
  // };

  //get items from local storage
  useEffect(() => {
    document.title = "Transloom | App";
    // document
    //   .querySelector('meta[name="description"]')
    //   .setAttribute(
    //     "content",
    //     "Transloom is a translation app that allows you to translate text and documentst from one language to another."
    //   );
  }, []);
  return (

    <>
      <div className="lg:h-[fit] bg-[#DFDFDF] p-3 lg:p-10 lg:pt-28 pt-20 lg:px-32 flex flex-col lg:flex-row justify-center gap-5 ">
        {/* input department */}
        <div className="h-[70vh] lg:h-[80vh] w-full lg:w-1/2 bg-white flex flex-col rounded">
          <div className=" bg-purple-800 h-16 colo flex items-center rounded-t gap-1 px-1 lg:gap-0">
            <HiLanguage className="text-white text-2xl lg:ml-5" />
            <span className="text-gray-100 text-xl ml-5">Translate</span>
            <span className="text-gray-100 text-lg ml-5 flex-row flex gap-5 border border-gray-400 px-5 py-1 rounded transition-all duration-300 ease-in-out">
              {InputLanguages.map((lang, index) => (
                <span
                  key={index}
                  className={
                    lang === activeLanguage
                      ? "text-purple-800 font-bold bg-gray-50 px-2 rounded"
                      : "text-gray-100 cursor-pointer"
                  }
                  onClick={() => setActiveLanguage(lang)}
                >
                  {lang}
                </span>
              ))}
            </span>
          </div>
          <div className="h-full border border-gray-300 shadow-md m-5 flex flex-col">
            <textarea
              type="text"
              placeholder="Type here Text to translate"
              className="border w-full p-3 outline-none resize-none flex-grow text-gray-800 font-semibold"
              // value=""
              name="input"
              onChange={InputChangeHandler}
            />
            <div className=" h-16  flex items-center justify-between px-5 ">
              <div className=" flex flow-row gap-3">
                <span className="h-12 shadow hover:shadow-md w-12 rounded-full colo flex items-center justify-center text-2xl cursor-pointer">
                  <FaMicrophone className="text-white" />
                </span>
                <span className="h-12 shadow hover:shadow-md w-12 rounded-full colo flex items-center justify-center text-2xl cursor-pointer">
                  <HiSpeakerWave className="text-white animate-none" />
                </span>
              </div>

              <div>
                <button
                  data-tooltip-id="send"
                  data-tooltip-content="Send"
                  data-tooltip-place="top"
                  disabled={Input ? false : true}
                  className={`disabled:cursor-default h-10 shadow hover:shadow-md w-14 rounded colo flex items-center justify-center text-3xl cursor-pointer`}
                >
                  {loading ? (
                    <FaSpinner className="animate-spin text-white" />
                  ) : (
                    <IoMdSend
                      className={
                        Input
                          ? "text-white animate-none tool-tip"
                          : "text-gray-300 animate-none"
                      }
                      onClick={Translate}
                    />
                  )}

                  <Tooltip
                    id="send"
                    style={{
                      fontSize: "15px",
                      fontWeight: "400",
                      padding: "0px 20px",
                      borderRadius: "5px",
                    }}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* output department */}
        <div className=" h-[70vh] lg:h-[80vh] w-full lg:w-1/2 bg-white flex flex-col rounded">
          <div className=" bg-purple-800 h-16 colo flex items-center rounded-t">
            <div className=" flex flex-row gap-20 lg:gap-36 mx-auto">
              <GoArrowSwitch className="text-gray-300 text-3xl ml-5" />
              <span className="text-gray-100 text-lg ml-5 flex-row flex gap-5 border border-gray-400 px-5 py-1 rounded transition-all duration-300 ease-in-out">
                {OutputLanguages.map((lang, index) => (
                  <span
                    key={index}
                    className={
                      lang === activeOutputLanguage
                        ? "text-purple-800 font-bold bg-gray-50 px-2 rounded"
                        : "text-gray-100 cursor-pointer"
                    }
                    onClick={() => setActiveOutputLanguage(lang)}
                  >
                    {lang}
                  </span>
                ))}
              </span>
            </div>
          </div>
          <div className="h-full border border-gray-300 shadow-md m-5 flex flex-col">
            <textarea
              type="text"
              placeholder={loading ? "Loading.." : ""}
              readOnly={true}
              className="border text-gray-800 font-medium w-full p-3 outline-none resize-none flex-grow placeholder-slate-400 "
              value={Output}
              ref={OutputRef}
            />
            <div className=" h-16 border flex items-center justify-between px-5 ">
              <div className=" flex flow-row gap-3">
                <button
                  className="h-12 disabled:cursor-default shadow hover:shadow-md w-12 rounded-full colo flex items-center justify-center text-2xl cursor-pointer"
                  disabled={Output ? false : true}
                >
                  <HiSpeakerWave
                    className={
                      Output
                        ? "text-white animate-none"
                        : "text-gray-300 animate-none"
                    }
                  // onClick={onSpeak}
                  />
                </button>
                <button
                  className="h-12 disabled:cursor-default shadow hover:shadow-2xl w-12 rounded-full colo flex items-center justify-center text-2xl cursor-pointer"
                  disabled={Output ? false : true}
                >
                  <IoIosCopy
                    onClick={copyToClipboard}
                    className={
                      Output
                        ? "text-white animate-none"
                        : "text-gray-300 animate-none"
                    }
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Home;
