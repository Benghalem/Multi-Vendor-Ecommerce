import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

const CountdownTimer = () => {
  // Target date for countdown (e.g., 1 day from now)
  const targetDate = new Date("2024-10-30T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <Box className="flex justify-center items-center   gap-1 sm:space-x-2 ">
      {Object.entries(timeLeft).map(([key, value], index) => (
        <Box key={index} className="text-center ">
          <Typography
            variant="h6"
            className="flex justify-center items-center pt-2 text-black text-[10px] sm:text-[16px] w-[25px] h-[25px] sm:w-[50px] sm:h-[50px]  bg-[#E7EDF7] rounded-full"
          >
            {String(value).padStart(2, "0")}
          </Typography>
          <Typography className="text-gray-500 pt-1 sm:pt-4 text-[9px] sm:text-[14px] ">
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default CountdownTimer;
