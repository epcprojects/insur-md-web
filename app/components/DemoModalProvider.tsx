"use client";

import React, { createContext, useContext, useState } from "react";
import SignInModal from "./modals/SignInModal";

type DemoModalContextType = {
  openModal: () => void;
  closeModal: () => void;
};

const DemoModalContext = createContext<DemoModalContextType | null>(null);

export function useDemoModal() {
  const context = useContext(DemoModalContext);

  if (!context) {
    throw new Error("useDemoModal must be used within DemoModalProvider");
  }

  return context;
}

export default function DemoModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <DemoModalContext.Provider value={{ openModal, closeModal }}>
      {children}

      <SignInModal isOpen={isModalOpen} onClose={closeModal} />
    </DemoModalContext.Provider>
  );
}
