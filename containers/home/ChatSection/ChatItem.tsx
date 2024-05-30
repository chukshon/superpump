import Image from "next/image";
import React from "react";

interface ChatItemProps {
  userIcon: string;
  userName: string;
  message: string;
  index: number;
}
const ChatItem = ({ userIcon, userName, message, index }: ChatItemProps) => {
  const isEven = (index + 1) % 2 === 0;
  return (
    <div
      className={`${
        isEven ? "bg-[#121212]" : "bg-[#222222]"
      } py-[5px] px-[10px] flex items-center gap-[20px]`}
    >
      <div className="flex items-center">
        <Image
          src={userIcon}
          alt="brown-rectangle-bg"
          width="52"
          height="52"
          className="object-contain"
        />
        <p className="text-[16px] text-[#47A7FF]">{userName}:</p>
      </div>
      <p>{message}</p>
    </div>
  );
};

export default ChatItem;
