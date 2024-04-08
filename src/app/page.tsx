"use client";

import quotes from "~/data/quotes.json";

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

export default function Home() {
  const today = new Date();
  const index = getDayOfYear(today) % quotes.length;
  const { text, source } = quotes[index];

  return (
    <main>
      <div className="bg-gray-200 min-h-screen flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg text-center text-gray-800 mx-2">
          <h1 className="text-3xl mb-2 text-gray-600">&quot;{text}&quot;</h1>
          {source && (
            <p className="font-light text-xl text-right">- {source}</p>
          )}
        </div>
      </div>
    </main>
  );
}
