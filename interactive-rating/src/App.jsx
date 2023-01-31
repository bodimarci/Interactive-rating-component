import React, { useState } from "react";
import RatingScreen from "./components/RatingScreen";
import ThankYou from "./components/ThankYou";

function App() {
  const [showThankYou, setShowThankYou] = useState(false);
  const [rating, setRating] = useState(true);

  return (
    <main className="grid min-h-screen place-items-center sm:px-0 px-3">
      <div className="bg-gradient-to-b from-[#252D37] to-[#1A1E25] sm:max-w-sm sm:max-h-sm rounded-3xl max-w-[22rem] max-h-[25rem]">
        <div className="sm:p-6 p-4">
          {showThankYou ? (
            <ThankYou rating={rating} />
          ) : (
            <RatingScreen
              rating={rating}
              setRating={setRating}
              setShowThankYou={setShowThankYou}
            />
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
