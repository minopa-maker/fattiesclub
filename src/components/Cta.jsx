import React, { useState } from "react";
import { getFirestore } from "firebase/firestore";

import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

function Cta({ refProp }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Funkcija za slanje podataka u Firestore
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email) {
      alert("Please enter both name and email!");
      return;
    }

    try {
      await addDoc(collection(db, "subscribers"), {
        name: name,
        email: email,
        timestamp: new Date(),
      });
      setSuccessMessage("Successfully joined!");
      setName("");
      setEmail("");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Error submitting data. Try again!");
    }
  };

  return (
    <div
      ref={refProp}
      className="text-center mb-8 bg-neutral-900 rounded m-5 p-5"
    >
      <h2 className="text-3xl text-white font-bold mt-4 mb-3">JOIN THE CLUB</h2>
      <h3 className="text-2xl text-white font-bold mb-4">
        Join Fatties Club and start your journey with a group of people who get
        you
      </h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="NAME"
          className="bg-white text-base w-full max-w-md px-4 py-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder=" E-MAIL"
          className=" bg-white text-base w-full max-w-md px-4 py-2 :"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <button
          type="submit"
          className="bg-orange-500  hover:bg-orange-600 cursor-pointer transition duration-100 text-2xl px-4 py-2 text-white font-bold"
        >
          GET STARTED
        </button>
      </form>

      {successMessage && (
        <p className="text-green-400 mt-3">{successMessage}</p>
      )}
    </div>
  );
}

export default Cta;
