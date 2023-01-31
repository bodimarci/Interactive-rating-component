import React from 'react'
import thankyouImage from "../assets/illustration-thank-you.svg";

const ThankYou = ({rating}) => {
  return (
    <div >
            <div className="flex justify-center mb-6 mt-3">
              <img src={thankyouImage} alt="mobile illustration" className="" />
            </div>
            <div className="bg-[#272f3a] rounded-full w-full mx-auto max-w-max my-5">
              <p className="text-[#FB7413] px-4 py-2 text-sm font-semibold">
                You selected <span>{rating}</span> out of 5
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
  )
}

export default ThankYou