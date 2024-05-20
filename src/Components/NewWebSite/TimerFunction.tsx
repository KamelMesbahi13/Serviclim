import { useState, useEffect } from "react";

const TimerFUnction = () => {
  const targetDate = new Date("March 28, 2024 00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [targetDate]);

  function calculateTimeLeft(targetDate: number) {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  const flexColDiv = `flex flex-col px-3 py-3 text-white md:px-8 md:py-4 bg-main`;
  const myText = `text-base md:text-4xl`;

  return (
    <div className="flex justify-center">
      <div className={flexColDiv}>
        <h1 className={myText}>{timeLeft.days}</h1>
        <p>Days</p>
      </div>
      <div className={`${flexColDiv} mx-4 md:mx-8`}>
        <h1 className={myText}>{timeLeft.hours}</h1>
        <p>Hours</p>
      </div>
      <div className={`${flexColDiv} mr-4 md:mr-8`}>
        <h1 className={myText}>{timeLeft.minutes}</h1>
        <p>Minutes</p>
      </div>
      <div className={flexColDiv}>
        <h1 className={myText}>{timeLeft.seconds}</h1>
        <p>Seconds</p>
      </div>
    </div>
  );
};

export default TimerFUnction;
