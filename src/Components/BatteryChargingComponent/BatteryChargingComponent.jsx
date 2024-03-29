import React, { useEffect, useState } from "react";
import goToTop from "../../lib/function/goToTop";

function BatteryChargingComponent() {
  const [battery, setBattery] = useState({
    fill: "transparent",
    bars: 0,
    percentage: 0,
  });

  useEffect(() => {
    const calculateScroll = () => {
      const root = document.documentElement;
      const scrollPercentage = Math.round((root.scrollTop / (root.scrollHeight - root.clientHeight)) * 100);

      if (scrollPercentage >= 20 && scrollPercentage < 40 && battery.percentage < 25) {
        setBattery({ ...battery, percentage: 25, fill: "#F14B4B", bars: 1 });
      } else if (scrollPercentage >= 40 && scrollPercentage < 60 && battery.percentage < 50) {
        setBattery({ ...battery, percentage: 50, fill: "#FB9117", bars: 2 });
      } else if (scrollPercentage >= 60 && scrollPercentage < 80 && battery.percentage < 75) {
        setBattery({ ...battery, percentage: 75, fill: "#F7E11E", bars: 3 });
      } else if (scrollPercentage >= 80 && battery.percentage < 100) {
        setBattery({ ...battery, percentage: 100, fill: "#8DD442", bars: 4 });
        document.removeEventListener("scroll", calculateScroll);
      } else if (scrollPercentage < 80 && battery.percentage === 100) {
        setBattery({ ...battery, percentage: 75, fill: "#F7E11E", bars: 3 });
      } else if (scrollPercentage < 60 && battery.percentage === 75) {
        setBattery({ ...battery, percentage: 50, fill: "#FB9117", bars: 2 });
      } else if (scrollPercentage < 40 && battery.percentage === 50) {
        setBattery({ ...battery, percentage: 25, fill: "#F14B4B", bars: 1 });
      } else if (scrollPercentage < 20 && battery.percentage === 25) {
        setBattery({ fill: "transparent", bars: 0, percentage: 0 });
      }
    };

    document.addEventListener("scroll", calculateScroll);
    return () => document.removeEventListener("scroll", calculateScroll);
  }, [battery]);

  return (
    <button onClick={goToTop} className="fixed bottom-10 left-16 max-md:hidden">
      <svg width="38" height="88" viewBox="0 0 38 88" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className={`duration-500 ${battery.bars >= 1 ? "opacity-100" : "opacity-0"}`} fill={battery.fill} d="M30.8096 66.5556H7.11133C6.14909 66.5556 5.36914 65.7757 5.36914 64.8134V58.7773C5.36914 57.8151 6.14909 57.0352 7.11133 57.0352H30.8096C31.7718 57.0352 32.5518 57.8151 32.5518 58.7773V64.8134C32.5518 65.7757 31.7718 66.5556 30.8096 66.5556Z" />
        <path className={`duration-500 ${battery.bars >= 2 ? "opacity-100" : "opacity-0"}`} fill={battery.fill} d="M30.8096 52.4941H7.11133C6.14909 52.4941 5.36914 51.7141 5.36914 50.7519V44.7158C5.36914 43.7536 6.14909 42.9736 7.11133 42.9736H30.8096C31.7718 42.9736 32.5518 43.7536 32.5518 44.7158V50.7519C32.5518 51.7139 31.7718 52.4941 30.8096 52.4941Z" />
        <path className={`duration-500 ${battery.bars >= 3 ? "opacity-100" : "opacity-0"}`} fill={battery.fill} d="M30.8096 38.4326H7.11133C6.14909 38.4326 5.36914 37.6526 5.36914 36.6904V30.6543C5.36914 29.6921 6.14909 28.9121 7.11133 28.9121H30.8096C31.7718 28.9121 32.5518 29.6921 32.5518 30.6543V36.6904C32.5518 37.6526 31.7718 38.4326 30.8096 38.4326Z" />
        <path className={`duration-500 ${battery.bars >= 4 ? "opacity-100" : "opacity-0"}`} fill={battery.fill} d="M30.8096 24.3711H7.11133C6.14909 24.3711 5.36914 23.5911 5.36914 22.6289V16.5928C5.36914 15.6305 6.14909 14.8506 7.11133 14.8506H30.8096C31.7718 14.8506 32.5518 15.6305 32.5518 16.5928V22.6289C32.5518 23.5911 31.7718 24.3711 30.8096 24.3711Z" />
        <path d="M32.6318 74.0373H5.28933C2.3728 74.0373 0 71.6645 0 68.7479V13.0511C0 10.1345 2.3728 7.76172 5.28933 7.76172H32.6318C35.5486 7.76172 37.9211 10.1345 37.9211 13.0511V68.7482C37.9211 71.6648 35.5486 74.0373 32.6318 74.0373ZM5.28933 9.18137C3.15559 9.18137 1.41965 10.9173 1.41965 13.0511V68.7482C1.41965 70.882 3.15559 72.6179 5.28933 72.6179H32.6318C34.7656 72.6179 36.5015 70.882 36.5015 68.7482V13.0511C36.5015 10.9173 34.7656 9.18137 32.6318 9.18137H5.28933Z" fill="#C8D2E7" />
        <path d="M28.7572 9.18093H9.16602V3.83339C9.16602 2.2025 10.4928 0.875977 12.1234 0.875977H25.7995C27.4304 0.875977 28.7572 2.20278 28.7572 3.83339V9.18093ZM10.5857 7.76128H27.3375V3.83339C27.3375 2.98529 26.6476 2.29563 25.7995 2.29563H12.1234C11.2756 2.29563 10.5857 2.98558 10.5857 3.83339V7.76128Z" fill="#C8D2E7" />
      </svg>
    </button>
  );
}

export default BatteryChargingComponent;
