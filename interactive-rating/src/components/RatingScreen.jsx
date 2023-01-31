import React, { useState } from "react";
import iconstar from "../assets/icon-star.svg";

const RatingScreen = ({ rating, setRating, setShowThankYou }) => {

  const handleSubmit = () => {
    if (!rating) return;
    setShowThankYou(true);
  };
  const Button = ({ number }) => {
    return (
      <button className="bg-[#272f3a] sm:w-12 sm:h-12 h-10 w-10 rounded-full flex justify-center items-center hover:bg-[#FB7413] duration-200 hover:text-white cursor-pointer focus:bg-gray-500 focus:text-white">
        {number}
      </button>
    );
  };
  return (
    <div>
      <div className="bg-[#313a46] rounded-full flex sm:w-12 sm:h-12 w-9 h-9 ">
        <img src={iconstar} alt="star-icon" className="sm:p-4 p-2" />
      </div>
      <div className="sm:my-7 my-5">
        <h1 className="text-white sm:text-2xl text-xl font-overpass font-[700]">
          How did we do?
        </h1>
        <p className="text-[#959EAC] mt-3 font-overpass font-[400]">
          Please let us know how we did with your support sequest. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>

      <ul className="flex text-[#959EAC] justify-between font-[700]">
        <li className="" onClick={() => setRating(1)}>
          <Button number={1} />
        </li>
        <li onClick={() => setRating(2)}>
          <Button number={2} />
        </li>
        <li onClick={() => setRating(3)}>
          <Button number={3} />
        </li>
        <li onClick={() => setRating(4)}>
          <Button number={4} />
        </li>
        <li onClick={() => setRating(5)}>
          <Button number={5} />
        </li>
      </ul>
      <button
        onClick={handleSubmit}
        className="bg-[#FB7413] text-white w-full mt-7 py-2.5 rounded-full font-semibold tracking-widest hover:bg-white hover:text-[#FB7413] duration-200 mb-4"
      >
        SUBMIT
      </button>
    </div>
  );
};

export default RatingScreen;
