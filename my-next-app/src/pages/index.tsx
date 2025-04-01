import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import PricingCard from "../components/pricing-card";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if user prefers dark mode
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <main
      className={`relative min-h-screen transition-colors duration-300 ${
        darkMode ? "dark bg-gray-900" : "bg-[#f9faff]"
      }`}
    >
      {/* Fixed background image with z-0 (lowest) */}
      <div className="fixed top-0 left-0 w-full z-0">
        <img
          src="/images/bg-pattern.svg"
          alt="Background Image"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Container with relative to ensure content is above z-0 */}
      <div className="relative container mx-auto px-4 py-8 z-10">
        {/* Dark Mode Toggle Button */}
        <div className="flex justify-end mb-6">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md z-20"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun className="text-yellow-400" />
            ) : (
              <Moon className="text-gray-700" />
            )}
          </button>
        </div>

        {/* Content with relative positioning */}
        <div className="flex flex-col items-center justify-center pt-8 pb-20 relative z-20">
          <div className="absolute inset-0 z-30 mb-99 bg-[url('/images/p.svg')] bg-no-repeat bg-center "></div>
          <div className="text-center mb-12 relative z-20">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">
              Simple, traffic-based pricing
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Sign-up for our 30-day trial. No credit card required.
            </p>
          </div>

          {/* Pricing Card */}
          <PricingCard />
        </div>
      </div>
    </main>
  );
}
