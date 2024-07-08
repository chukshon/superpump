import React from "react";
import { PiTelegramLogoLight } from "react-icons/pi";

const TelegramIcon = ({
  className,
  size,
}: {
  className?: string;
  size?: number;
}) => {
  return (
    <PiTelegramLogoLight
      className={`${className} z-40 text-[#47A7FF]`}
      size={size ?? 20}
    />
  );
};

export default TelegramIcon;
