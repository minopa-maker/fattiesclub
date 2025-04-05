import React from "react";

function JourneyMap() {
  return (
    <div className="grid grid-cols-2 gap-8 items-center text-white text-center mt-12 mb-12">
      <div>
        <img src="1.svg" alt="Join the Club" className="mx-auto w-20 h-20" />
        <h3 className="text-lg font-bold">JOIN THE CLUB</h3>
        <p>You become a member. Congratulations. Your journey begins.</p>
      </div>

      <div>
        <img src="2.svg" alt="Set your goals" className="mx-auto w-20 h-20" />
        <h3 className="text-lg font-bold">SET YOUR GOALS</h3>
        <p>Now it's serious. With our help, you set your goals.</p>
      </div>

      <div>
        <img src="3.svg" alt="Stay on Track" className="mx-auto w-20 h-20" />
        <h3 className="text-lg font-bold">STAY ON TRACK</h3>
        <p>
          You're now on your journey. Share your struggle. Let other members
          help you.
        </p>
      </div>

      <div>
        <img
          src="4.svg"
          alt="Achieve & Inspire"
          className="mx-auto w-20 h-20"
        />
        <h3 className="text-lg font-bold">ACHIEVE & INSPIRE</h3>
        <p>
          Achieve your goals. Share your success. Inspire others to do better.
        </p>
      </div>
    </div>
  );
}

export default JourneyMap;
