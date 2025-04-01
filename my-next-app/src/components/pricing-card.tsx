import React, { useState } from "react";
import { Check } from "lucide-react";

const pricingTiers = [
  { pageviews: "10K", price: 8 },
  { pageviews: "50K", price: 12 },
  { pageviews: "100K", price: 16 },
  { pageviews: "500K", price: 24 },
  { pageviews: "1M", price: 36 },
];

export default function PricingCard() {
  const [sliderValue, setSliderValue] = useState(2);
  const [isYearly, setIsYearly] = useState(false);
  const maxValue = 4;

  const currentTier = pricingTiers[sliderValue];
  const discount = 0.25;
  const finalPrice = isYearly
    ? currentTier.price * (1 - discount) * 12
    : currentTier.price;

  // Handle slider change
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(e.target.value));
  };

  // Calculate slider gradient percentage
  const sliderPercentage = (sliderValue / (pricingTiers.length - 1)) * 100;

  return (
    <div className="w-full max-w-3xl bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-sm font-bold text-gray-500 dark:text-gray-400">
          {currentTier.pageviews} PAGEVIEWS
        </h2>
        <div className="text-3xl font-bold text-gray-800 dark:text-white">
          ${finalPrice.toFixed(2)}
          <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
            /{isYearly ? "year" : "month"}
          </span>
        </div>
      </div>

      <div className="mb-10">
        <div className="relative">
          <input
            type="range"
            value={sliderValue}
            min="0"
            max={maxValue}
            onChange={handleSliderChange}
            className="w-full h-2 rounded-full appearance-none cursor-pointer bg-gray-200 dark:bg-gray-700"
            style={{
              background: `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${sliderPercentage}%, hsl(224, 65%, 95%) ${sliderPercentage}%, hsl(224, 65%, 95%) 100%)`,
            }}
          />

          <style jsx>{`
            input[type="range"]::-webkit-slider-thumb {
              -webkit-appearance: none;
              width: 40px;
              height: 40px;
              border-radius: 50%;
              background: hsl(174, 86%, 45%) url("/images/icon-slider.svg")
                no-repeat center;
              cursor: pointer;
              box-shadow: 0 15px 30px rgba(0, 255, 231, 0.3);
              transition: background-color 0.2s;
            }

            input[type="range"]::-webkit-slider-thumb:hover {
              background-color: hsl(174, 86%, 35%);
            }

            input[type="range"]::-moz-range-thumb {
              width: 40px;
              height: 40px;
              border-radius: 50%;
              background: hsl(174, 86%, 45%) url("/icon-slider.svg") no-repeat
                center;
              cursor: pointer;
              box-shadow: 0 15px 30px rgba(0, 255, 231, 0.3);
              transition: background-color 0.2s;
            }

            input[type="range"]::-moz-range-thumb:hover {
              background-color: hsl(174, 86%, 35%);
            }
          `}</style>
        </div>
      </div>

      <div className="flex items-center justify-center my-6">
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Monthly
        </span>
        <label className="mx-3 relative inline-block w-12 h-6">
          <input
            type="checkbox"
            className="hidden"
            checked={isYearly}
            onChange={() => setIsYearly(!isYearly)}
          />
          <span
            className={`absolute cursor-pointer inset-0 bg-[hsl(174,86%,45%)] dark:bg-[hsl(174,86%,45%)] rounded-full transition-colors duration-200 ${
              isYearly ? "bg-[hsl(174,86%,45%)]" : "bg-gray-300"
            }`}
          >
            <span
              className={`absolute w-4 h-4 bg-white rounded-full transition-transform top-1 ${
                isYearly ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </span>
        </label>
        <span className="text-sm text-gray-500 dark:text-gray-400">Yearly</span>
        <span className="ml-2 text-xs bg-[#feece7] text-[#ff8c66] dark:bg-[#ff8c66]/20 dark:text-[#ff8c66] py-0.5 px-2 rounded-full">
          25% off
        </span>
      </div>

      <div className="flex justify-between ">
        <ul className="space-y-2 mb-6">
          {["Unlimited websites", "100% data ownership", "Email reports"].map(
            (feature, index) => (
              <li
                key={index}
                className="flex items-center text-sm text-gray-500 dark:text-gray-400"
              >
                <Check className="w-4 h-4 text-[hsl(174,86%,45%)] mr-2" />
                {feature}
              </li>
            )
          )}
        </ul>

        <button className="w-35 mt-6 h-10 mr-8 bg-[#293356] hover:bg-[#10172a] text-white py-2 px-4 rounded-full transition-colors text-sm font-bold">
          Start my trial
        </button>
      </div>
    </div>
  );
}
