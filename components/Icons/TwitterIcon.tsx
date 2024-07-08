import React from "react";
import { RiTwitterXLine } from "react-icons/ri";

const TwitterIcon = ({
  className,
  size,
}: {
  className?: string;
  size?: number;
}) => {
  return (
    <RiTwitterXLine
      className={`${className} z-40 text-[#47A7FF]`}
      size={size ?? 20}
    />
  );
};

export default TwitterIcon;
