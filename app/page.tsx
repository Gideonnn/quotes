"use client";

import "./output.css";
import quotes from "../data/quotes.json";

function getDayOfYear(date: Date) {
  const timestamp1 = Date.UTC(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );
  const timestamp2 = Date.UTC(date.getFullYear(), 0, 0);
  const differenceInMilliseconds = timestamp1 - timestamp2;
  const differenceInDays = differenceInMilliseconds / 1000 / 60 / 60 / 24;
  return differenceInDays;
}

function getDailyQuote(today = new Date()) {
  const index = getDayOfYear(today) % quotes.length;
  return quotes[index];
}

export default async function Home() {
  const { text, source } = getDailyQuote();

  return (
    <main>
      <div className="bg-gray-200 min-h-screen flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg text-center text-gray-800">
          <h1 className="font-bold text-3xl mb-2 text-gray-600">
            &quot;{text}&quot;
          </h1>
          <p className="font-light text-xl text-right">- {source}</p>
        </div>
      </div>
    </main>
  );
}
