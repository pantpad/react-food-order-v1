import { useState, createContext } from "react";

export const modalContext = createContext({
  isOpen: false,
  currentView: null,
  closeModal: () => {},
  openModal: () => {},
  changeView: () => {},
});

export default function ModalContextProvider({ children }) {
  const [isOpen, setIsOpen] = useState(null);
  const [currentView, setCurrentView] = useState(null);

  function handleModalOpening(view) {
    setIsOpen(true);
    setCurrentView(view);
  }

  function handleViewChange(view) {
    setCurrentView(view);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const modalCtx = {
    isOpen: isOpen,
    currentView: currentView,
    closeModal: closeModal,
    openModal: handleModalOpening,
    changeView: handleViewChange,
  };

  return (
    <modalContext.Provider value={modalCtx}>{children}</modalContext.Provider>
  );
}
