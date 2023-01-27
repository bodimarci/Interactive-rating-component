import React, { useState } from "react";
import iconstar from "./assets/icon-star.svg";
import thankyouImage from "./assets/illustration-thank-you.svg";

function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <main className="grid min-h-screen place-items-center sm:px-0 px-3">
      <div className="bg-gradient-to-b from-[#252D37] to-[#1A1E25] sm:max-w-sm sm:max-h-sm rounded-3xl max-w-[22rem] max-h-[25rem]">
        <div className="sm:p-6 p-4">
          {/* rating page */}
          <div className={`${toggle ? "hidden" : "block"}`}>
            <div className="bg-[#313a46] rounded-full flex sm:w-12 sm:h-12 w-9 h-9 ">
              <img src={iconstar} alt="star-icon" className="sm:p-4 p-2" />
            </div>
            <div className="sm:my-7 my-5">
              <h1 className="text-white sm:text-2xl text-xl font-overpass font-[700]">
                How did we do?
              </h1>
              <p className="text-[#959EAC] mt-3 font-overpass font-[400]">
                Please let us know how we did with your support sequest. All
                feedback is appreciated to help us improve our offering!
              </p>
            </div>
            <div className="">
              <ul className="flex text-[#959EAC] justify-between font-[700]">
                <li className="numberlist">
                  <button>1</button>
                </li>
                <li className="numberlist">
                  <button>2</button>
                </li>
                <li className="numberlist">
                  <button>3</button>
                </li>
                <li className="numberlist">
                  <button>4</button>
                </li>
                <li className="numberlist">
                  <button>5</button>
                </li>
              </ul>
              {/* toogle */}
              <button
                onClick={() => setToggle(true)}
                className="bg-[#FB7413] text-white w-full mt-7 py-2.5 rounded-full font-semibold tracking-widest hover:bg-white hover:text-[#FB7413] duration-200 mb-4"
              >
                SUBMIT
              </button>
            </div>
          </div>
          {/* thank you page */}
          <div className={`${!toggle ? "hidden" : "block"}`}>
            <div className="flex justify-center mb-6 mt-3">
              <img src={thankyouImage} alt="mobile illustration" className="" />
            </div>
            <div className="bg-[#272f3a] rounded-full w-full mx-auto max-w-max my-5">
              <p className="text-[#FB7413] px-4 py-2 text-sm font-semibold">
                You selected 4 out of 5
              </p>
            </div>
            <div className="mb-5 text-center">
              <h1 className="text-white sm:text-2xl text-xl font-overpass font-[700]">
                Thank you!
              </h1>
              <p className="text-[#959EAC] mt-3 font-overpass font-[400] text-[0.9rem]">
                We appreciate you taking the time to give rating. If you ever
                need more support, don't hesitate to get in touch!
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
