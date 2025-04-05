import React from "react";

function WhyJoin({ onJoinClick }) {
  return (
    <div className="text-center text-white p-4 mt-8">
      <h2 className="mt-2.5  text-4xl font-bold text-white">WHY JOIN?</h2>
      <ul className="mt-3 text-2xl mb-6">
        <li>
          🤝No more doing it alone - Find people who get you and your goals
        </li>
        <li>
          💥Motivation when you need it most - Because we all hit roadblocks
          sometimes
        </li>
        <li>
          📚Learn from those ahead of you - Proven strategies from people who've
          been there
        </li>
        <li>
          🏆No distractions, focus on results - No bullshitting, just real
          progress
        </li>
        <li>
          🏃Gathered knowledge from other members - Training and diet tips,
          mindset shifts & success stories
        </li>
      </ul>
      <button
        onClick={onJoinClick}
        className="bg-orange-500 hover:bg-orange-600 transition duration-100 pt-4 pb-4 pl-6 pr-6 rounded text-white font-bold text-1.5xl cursor-pointer mb-4"
      >
        BECOME MEMBER
      </button>
    </div>
  );
}

export default WhyJoin;
