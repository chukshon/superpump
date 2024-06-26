import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useModalContext } from "@/context/ModalContext";
import Image from "next/image";
import DefaultModalHeader from "./DefaultModalHeader";

// Use this modal if you don't want it to be responsive(i.e it retains the same desktop modal design on both desktop and mobile screens), search for the promptModal component for reference on how this was used
export interface ModalProps {
  children: React.ReactNode;
  modalHeaderTitle?: string;
  hasHeader?: boolean;
  isLoading?: boolean;
  width?: number;
}

const Modal = ({
  modalHeaderTitle,
  children,
  isLoading,
  width = 500,
}: ModalProps) => {
  const { hideModal } = useModalContext();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const ModalContent = (
    <AnimatePresence>
      <div
        className="fixed left-0 top-0 z-[1000] flex h-[100%] w-[100%] items-center justify-center bg-neutral-black-rgba backdrop-blur-[3px]"
        onClick={isLoading ? undefined : hideModal}
      >
        <motion.div
          style={{ width: `${width}px` }}
          className="bg-neutral-900 backdrop-blur-[10px] overflow-hidden rounded-[10px] md:max-w-[1000px]  border-[1px] border-neutral-0"
          onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
            e.stopPropagation()
          }
          initial={{
            opacity: 0,
            scale: 0.75,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              ease: "easeOut",
              duration: 0.15,
            },
          }}
          exit={{
            opacity: 0,
            scale: 0.75,
            transition: {
              ease: "easeIn",
              duration: 0.15,
            },
          }}
        >
          {!!modalHeaderTitle && (
            <DefaultModalHeader
              modalHeaderTitle={modalHeaderTitle}
              handleCloseModal={hideModal}
            />
          )}

          <div className="shadow-[0px_0px_10px_rgba(0, 0, 0, 0.1)] h-[100%] max-h-[500px] w-[100%] ">
            {children}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );

  // Need better null handling
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return createPortal(ModalContent, document.getElementById("modal-root")!);
};

export default Modal;
