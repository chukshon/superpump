import TopBar from "@/containers/tokenDetails/TopBar";
import React from "react";

const PresalePageLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      {/* Top Bar */}
      <TopBar />
      {children}
    </div>
  );
};

export default PresalePageLayout;
