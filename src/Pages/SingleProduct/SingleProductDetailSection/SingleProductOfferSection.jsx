import React, { useState, useEffect } from "react";
import SingleProductOfferTimeCounter from "../SingleProductTabSection/Components/SingleProductOfferTimeCounter/SingleProductOfferTimeCounter";

function SingleProductOfferSection({ className }) {
  const [numbers, setNumbers] = useState({
    seconds: 3,
    minutes: 26,
    hours: 17,
    days: 2,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setNumbers((prevNumbers) => {
        let updatedSeconds = prevNumbers.seconds - 1;
        let updatedMinutes = prevNumbers.minutes;
        let updatedHours = prevNumbers.hours;
        let updatedDays = prevNumbers.days;

        if (updatedSeconds === -1) {
          updatedMinutes -= 1;
          updatedSeconds = 59;
        }

        if (updatedMinutes === -1) {
          updatedHours -= 1;
          updatedMinutes = 59;
        }

        if (updatedHours === -1) {
          updatedDays -= 1;
          updatedHours = 23;
        }

        return {
          seconds: updatedSeconds,
          minutes: updatedMinutes,
          hours: updatedHours,
          days: updatedDays,
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`flex justify-between items-center w-full gap-2 ${className}`}>
      <div className="flex-col gap-[0.375rem]">
        <span className="text-sm text-NeutralN500 font-semibold">پیشنــهاد</span>
        <span className="text-sm text-Magenta font-semibold">شگفت انگــیز</span>
      </div>
      <div className="flex-center gap-2">
        <SingleProductOfferTimeCounter number={numbers.seconds} text="ثانیه" />
        <SingleProductOfferTimeCounter number={numbers.minutes} text="دقیقه" />
        <SingleProductOfferTimeCounter number={numbers.hours} text="ساعت" />
        <SingleProductOfferTimeCounter number={numbers.days} text="روز" />
      </div>
    </div>
  );
}

export default SingleProductOfferSection;
