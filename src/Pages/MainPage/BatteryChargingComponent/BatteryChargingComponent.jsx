import React from "react";
import { ReactComponent as Battery } from "../../../assets/images/battery-component/battery-full.svg";

function BatteryChargingComponent() {
  return (
    <>
      <Battery className="fixed bottom-10 left-16" />
    </>
  );
}

export default BatteryChargingComponent;
