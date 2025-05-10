// src/components/MembershipCTA.jsx

import React from "react";

const MembershipCTA = () => {
  return (
    <section className="bg-neutral-900 text-white py-16 px-6 text-center rounded-lg max-w-3xl mx-auto shadow-lg">
      <img
        src="/logov3.svg" // Pretpostavljam da se logo zove 'logo.png'. Promijeni ako nije.
        alt="Fatties Club Logo"
        className="w-20 h-20 mx-auto mb-4 rounded-full"
      />
      <h2 className="text-3xl font-bold mb-2">Fatties Club Membership</h2>
      <p className="text-xl font-semibold mb-6 text-yellow-400">
        $11 one-time payment
      </p>

      <a
        href="https://minopa.gumroad.com/l/satwe" // Zamijeni tvojim stvarnim linkom
        target="_blank"
        rel="noopener noreferrer"
        className="bg-orange-400 hover:bg-orange-400 text-white font-bold py-3 px-6 rounded-full transition duration-300 mb-8 inline-block"
      >
        JOIN NOW
      </a>

      <div className="text-left max-w-md mx-auto">
        <ul className="space-y-3">
          <li>✔️ Access to our private Fatties Club community</li>
          <li>✔️ Daily motivation & fitness tips</li>
          <li>✔️ Sneak peeks of upcoming content</li>
          <li>✔️ Early access to future merch drops</li>
          <li>✔️ Entry into exclusive transformation challenges</li>
          <li>✔️ Lifetime access – no monthly fees</li>
        </ul>
      </div>
    </section>
  );
};

export default MembershipCTA;
