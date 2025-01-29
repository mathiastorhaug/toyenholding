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
    {
      quote:
        "Det her er forskjellen på normcore og hvermanns\nJeg kan slippe inn på Berghain i Bergans",
      title: "Tech & Stil",
      timestamp: "00:53",
      artist: "Mest seff",
    },
  ];

  // State to track the current quote
  // State to track the current quote index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to generate a new random quote index (ensuring it's different from the current one)
  const getRandomQuote = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * quotes.length);
    } while (newIndex === currentIndex); // Ensure a different index

    setCurrentIndex(newIndex);
  };

  const currentQuote = quotes[currentIndex];

  return (
    <div className="flex flex-col h-full font-serif text-2xl lg:text-5xl">
      {/* Main Content */}
      <div className="flex-grow space-y-4">
        <h1 className="whitespace-pre-line">“{currentQuote.quote}”</h1>
        <div className="flex">
          <p className="font-sans text-sm font-bold hover:underline">
            {currentQuote.title}
          </p>
          <p className="font-sans text-sm font-bold mx-2 text-black/60">•</p>
          <p className="font-sans text-sm text-black/60">
            {currentQuote.timestamp}
          </p>
          <p className="font-sans text-sm font-bold mx-2 text-black/60 ">•</p>
          <p className="font-sans text-sm text-black/60">
            {currentQuote.artist}
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="flex justify-between items-center font-sans text-sm font-bold">
        <button
          className="cursor-pointer hover:underline"
          onClick={getRandomQuote}
        >
          Ny linje
        </button>

        <a
          href="/releases"
          className="font-sans text-sm font-bold hover:underline hover:cursor-pointer"
        >
          Alle utgivelser
        </a>
      </footer>
    </div>
  );
}
