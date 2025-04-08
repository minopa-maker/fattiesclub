import React from "react";

function NavBar({ onJoinClick }) {
  return (
    <div className="mb-1 flex items-center justify-between px-6 py-4">
      <img
        src="/logov3.svg"
        alt="
      Fatties Club Logo"
        className="h-15"
      />
      <button
        onClick={onJoinClick}
        className="px-4 py-2 bg-orange-500 hover:bg-orange-700 transition duration-100 text-white rounded"
      >
        JOIN THE CLUB
      </button>
    </div>
  );
}

export default NavBar;
