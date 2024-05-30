import React from "react";
import ChatItem from "./ChatItem";

const ChatSection = () => {
  const Chats = [
    {
      userIcon: "/images/user.png",
      userName: "Kraken",
      message: "hahahaha. Best platform evah!!!!!",
    },
    {
      userIcon: "/images/user.png",
      userName: "Kraken",
      message: "hahahaha. Best platform evah!!!!!",
    },
    {
      userIcon: "/images/user.png",
      userName: "Kraken",
      message: "hahahaha. Best platform evah!!!!!",
    },
  ];
  return (
    <div className="border-[1px] border-neutral-0 pt-[10px] rounded-[8px]">
      {/* Chat List */}
      <ul className="min-h-[500px]">
        {Chats.map((chat, index) => {
          return <ChatItem {...chat} index={index} />;
        })}
      </ul>

      {/* Chat Action */}
      <div className="border-[1px] border-neutral-0 py-[15px] rounded-[8px] flex">
        <input
          placeholder="Chat Here"
          className="w-[80%] outline-none bg-[transparent] placeholder:text-[16px] text-[16px] placeholder:text-[#B2B2B2] text-neutral-50 active:bg-[transparent] pl-[20px]"
        />
        <button type="button" className="w-[20%] text-[#B2B2B2]">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatSection;
