import React from "react";

const Divider = ({ className }: { className?: string }) => {
  return <div className={`${className} h-[1px] w-full`}></div>;
};

export default Divider;
