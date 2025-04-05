import React from "react";

function NavBar({ onJoinClick }) {
  return (
    <div className="mb-6">
      <button
        onClick={onJoinClick}
        className=" cursor-pointer  absolute top-4 right-4 px-4 py-2 bg-orange-500 hover:bg-orange-700 transition duration-100 text-white rounded"
      >
        JOIN THE WAITLIST
      </button>
    </div>
  );
}

export default NavBar;
