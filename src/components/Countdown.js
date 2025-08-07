"use client";
import { useEffect, useState } from "react";
import Countdown from "react-countdown";

export default function CountdownPage({ onComplete, birthdayDate }) {
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      onComplete();
      return null;
    }

    const segment = (value, label) => (
      <div className="flex flex-col items-center mx-2 animate-count">
        <div className="bg-white bg-opacity-10 backdrop-blur-md text-black text-4xl font-bold px-4 py-2 rounded-lg shadow-lg min-w-[70px] text-center">
          {String(value).padStart(2, "0")}
        </div>
        <div className="mt-2 text-sm font-semibold text-white uppercase tracking-wide">
          {label}
        </div>
      </div>
    );

    return (
      <div className="flex mt-6 gap-4">
        {segment(hours, "Hours")}
        {segment(minutes, "Minutes")}
        {segment(seconds, "Seconds")}
      </div>
    );
  };

  return (
    <div
      className="flex flex-col justify-center items-center w-screen h-screen overflow-hidden"
      style={{
        background: "url(/images/bg.jpg) center/cover no-repeat",
      }}
    >
      <p className="text-5xl font-aladin text-center bg-gradient-to-r from-purple-500 via-pink-500 to-blue-400 text-transparent bg-clip-text animate-pulse drop-shadow-lg">
        The Celebration Starts In
      </p>

      <Countdown date={birthdayDate} renderer={renderer} />

      <div className="relative mt-10 w-[80vw] max-w-[300px]">
        <img
          src="/images/cake.png"
          alt="Cake"
          className="w-full h-auto block"
        />
      </div>
    </div>
  );
}
