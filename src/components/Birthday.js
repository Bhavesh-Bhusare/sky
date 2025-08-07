"use client";
import { useEffect, useRef, useState } from "react";
import confetti from "canvas-confetti";

const captions = [
  "Being around you feels effortlessly right — like something my heart quietly knew before my mind ever did.",
  "You're a sunflower — strong, bright, and always finding the light. 🌻",
  "I swear, even dogs know you're a good soul — they run to you like you’re made of treats and trust. 🐶",
  "You have this crazy talent of lighting up rooms without even trying.",
  "You’re as breathtaking as mountain peaks wrapped in morning mist. ⛰️",
  "You're not just beautiful — you're real, and that matters so much more.",
  "Even your laughter feels like home.",
  "Your love for Guddu is the purest kind of love — soft, loyal, and full of purrs. 🐱",
  "If compassion had a face, it would look a lot like yours.",
  "The way your eyes light up when you talk about the Sahyadris is pure magic.",
  "Thank you for showing me the best DASHAVTAR",
  "You’re like a playlist of all the best moments in life.",
  "You make the world feel like a little less mess and a lot more magic.",
  "Your heart is the safest place I know — warm, wild, and wonderfully kind.",
  "You’re the rare type of person who can make silence feel like a hug.",
  "You're the human version of `everything’s gonna be okay`.",
  "You have the calm beauty of the moon — glowing, comforting, and always there. 🌙",
  "You give the kind of friendship that novels try to describe.",
  "You’re like the early sunlight on a restless morning — calm, warm, and quietly beautiful.",
  "You don’t just love animals — you understand them, and that’s the most beautiful thing. 🐾",
  "You’re the kind of soul that makes strangers smile and animals feel safe.",
  "You have a way of making people feel seen, safe, and sincerely valued.",
  "You treat people with a quiet grace that’s rare and beautiful.",
  "The way you stay grounded yet dream so big is what makes your vibe so inspiring.",
  "Your presence is gentle, but your impact is unforgettable.",
];

const images = Array.from({ length: 25 }, (_, i) => `/images/${i + 1}.png`);

export default function BirthdayCelebrationPage() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(true);
  const intervalRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && hasStarted) {
      launchConfetti();
      startSlideShow();

      if (audioRef.current) {
        audioRef.current.volume = 1;
        audioRef.current.play().catch(() => {
          console.warn("Autoplay blocked: user interaction required");
        });
      }

      return () => stopSlideShow();
    }
  }, [hasStarted]);

  const startSlideShow = () => {
    intervalRef.current = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setSlideIndex((prev) => (prev + 1) % images.length);
        setIsFading(false);
      }, 400);
    }, 5000);
  };

  const stopSlideShow = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const launchConfetti = () => {
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.6 },
    });
  };

  const handleCardClick = (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { x, y },
    });
  };

  const goToNextSlide = () => {
    setIsFading(true);
    setTimeout(() => {
      setSlideIndex((prev) => (prev + 1) % images.length);
      setIsFading(false);
    }, 400);
  };

  const goToPrevSlide = () => {
    setIsFading(true);
    setTimeout(() => {
      setSlideIndex((prev) => (prev - 1 + images.length) % images.length);
      setIsFading(false);
    }, 400);
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlayingMusic) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlayingMusic(!isPlayingMusic);
    }
  };

  return (
    <div
      className="w-screen h-screen overflow-hidden bg-gradient-to-b from-[#dfeef0] to-[#b8e0db] flex flex-col items-center justify-start pt-8 pb-5 px-4 relative"
      onClick={handleCardClick}
    >
      {/* Native Audio */}
      <audio
        ref={audioRef}
        src="/music/bday.mp3"
        loop
        preload="auto"
        autoPlay
      />

      {/* Splash screen */}
      {!hasStarted && (
        <div className="absolute inset-0 z-50 bg-gradient-to-b from-[#dfeef0] to-[#b8e0db] bg-opacity-95 flex items-center justify-center">
          <button
            onClick={() => setHasStarted(true)}
            className="bg-pink-500 hover:bg-pink-600 text-white text-2xl md:text-3xl font-bold py-5 px-10 rounded-2xl shadow-xl animate-bounce hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            Click to Witness the Magic ✨
          </button>
        </div>
      )}

      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold text-pink-600 drop-shadow-md text-center">
        🎉 Happy Birthday! 🎂
      </h1>
      {/* Footer */}
      <h1 className="text-2xl md:text-3xl font-bold text-pink-600 mb-6  drop-shadow-md text-center">
        Sky (Namu) ❤️
      </h1>
      {/* Card */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-6 w-full max-w-[400px] h-[480px] relative flex flex-col justify-between overflow-hidden">
        <div
          key={slideIndex}
          className={`transition-opacity duration-700 ease-in-out ${
            isFading ? "opacity-0" : "opacity-100"
          } flex flex-col justify-between h-full`}
        >
          <img
            src={images[slideIndex]}
            alt="birthday slide"
            className="w-full h-[340px] object-contain rounded-md mb-4 transition-all duration-700 ease-in-out"
          />
          <p className="text-center text-gray-700 text-base md:text-lg font-medium min-h-[60px]">
            {captions[slideIndex]}
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="mt-6 flex flex-col md:flex-row items-center gap-4">
        <div className="flex gap-4">
          <button
            onClick={goToPrevSlide}
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold px-4 py-2 rounded-lg shadow"
          >
            ⬅️ Previous
          </button>
          <button
            onClick={goToNextSlide}
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold px-4 py-2 rounded-lg shadow"
          >
            Next ➡️
          </button>
        </div>

        <button
          onClick={toggleMusic}
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-4 py-2 rounded-lg shadow"
        >
          {isPlayingMusic ? "Pause Music 🔇" : "Play Music 🎵"}
        </button>
      </div>
    </div>
  );
}
