import EarnTopBar from "@/containers/Earn/EarnTopBar";
import React from "react";

const EarnLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      {/* Top Bar */}
      <EarnTopBar />
      {children}
    </div>
  );
};

export default EarnLayout;
