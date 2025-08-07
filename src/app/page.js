"use client";
import BirthdayCelebrationPage from "@/components/Birthday";
import CountdownPage from "@/components/Countdown";
import confetti from "canvas-confetti";
import { useState } from "react";

const birthdayDate = new Date("2025-08-07T00:00:00");

export default function BirthdayPage() {
  const [isBirthday, setIsBirthday] = useState(false);
  const handleClick = (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { x, y },
    });
  };
  return isBirthday ? (
    <BirthdayCelebrationPage />
  ) : (
    <div
      className="flex flex-col items-center justify-center w-screen h-screen bg-black"
      onClick={handleClick}
    >
      <CountdownPage
        onComplete={() => setIsBirthday(true)}
        birthdayDate={birthdayDate}
      />
    </div>
  );
}
