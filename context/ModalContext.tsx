"use client";
import React, { useContext, useState } from "react";

const DEFAULT_CONTEXT_VALUE = {
  showModal: (modal: React.ReactNode) => {
    console.log(modal?.toString());
  },
  hideModal: () => {
    console.log("hide modal");
  },
};

const ModalContext = React.createContext(DEFAULT_CONTEXT_VALUE);

export const useModalContext = () => {
  const result = useContext(ModalContext);
  if (!result) {
    throw new Error("Modal Context used outside of its Provider!");
  }
  return result;
};

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [modalContent, setModalContent] = useState<
    React.ReactNode | undefined
  >();
  const showModal = (modal: React.ReactNode) => {
    setModalContent(modal);
  };
  const hideModal = () => {
    setModalContent(undefined);
  };

  const value = {
    showModal,
    hideModal,
  };

  return (
    <ModalContext.Provider value={value}>
      {!!modalContent ? modalContent : null}
      {children}
    </ModalContext.Provider>
  );
};
