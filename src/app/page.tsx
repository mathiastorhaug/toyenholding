"use client";

import { useState } from "react";

export default function Home() {
  // Object with quotes and their properties
  const quotes = [
    {
      quote:
        "De veit jeg puller opp med flammer\nSom Kronprins Haakon gjorde i Lillehammer",
      title: "Pause fra pausen",
      timestamp: "00:54",
      artist: "Mest Seff",
    },
    {
      quote: "Hvis du var i tvil\nVito er en varebil",
      title: "Vito",
      timestamp: "02:00",
      artist: "Mest seff, Fredfades",
    },
  ];

  // State to track the current quote
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  // Function to generate a new random quote
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  return (
    <div className="flex flex-col h-full font-serif text-7xl">
      {/* Main Content */}
      <div className="flex-grow md:mt-[35vh]">
        <h1 className="whitespace-pre-line">“{currentQuote.quote}”</h1>
        <p className="mt-4">
          <span className="font-sans text-base font-bold">
            {currentQuote.title}
          </span>
          <span className="font-sans text-base font-bold mx-2 text-gray-600">
            •
          </span>
          <span className="font-sans text-base text-gray-600">
            {currentQuote.timestamp}
          </span>
          <span className="font-sans text-base font-bold mx-2 text-gray-600">
            •
          </span>
          <span className="font-sans text-base text-gray-600">
            {currentQuote.artist}
          </span>
        </p>
      </div>

      {/* Footer */}
      <footer className="flex justify-between items-center h-[80px] font-sans pr-6 text-base font-bold">
        <span
          className="cursor-pointer  hover:underline"
          onClick={getRandomQuote}
        >
          Ny linje
        </span>

        <span className="font-sans text-base font-bold">Alle utgivelser</span>
      </footer>
    </div>
  );
}
