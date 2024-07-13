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
  const [modals, setModals] = useState<React.ReactNode[]>([]);
  const showModal = (modal: React.ReactNode) => {
    setModals((prev) => [...prev, modal]);
  };
  const hideModal = () => {
    setModals((prev) => prev.slice(0, -1));
  };

  const value = {
    showModal,
    hideModal,
  };

  return (
    <ModalContext.Provider value={value}>
      {modals.map((modalContent, index) => (
        <div key={index} className="modal-overlay">
          {modalContent}
        </div>
      ))}
      {children}
    </ModalContext.Provider>
  );
};
