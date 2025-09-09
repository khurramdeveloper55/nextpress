"use client";

export default function Home({ children }) {
  return (
    <div className="flex flex-col">
      <header className="flex justify-between px-4 py-2">
        <div>
          <h1>Left Side</h1>
        </div>
        <div>
          <h1>Center</h1>
        </div>
        <div>
          <h1>Right Side</h1>
        </div>
      </header>
    </div>
  );
}
