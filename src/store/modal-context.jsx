import { useState, createContext } from "react";

export const modalContext = createContext({
  isOpen: false,
  currentView: null,
  formData: {},
  closeModal: () => {},
  openModal: () => {},
  changeView: () => {},
  changeFormData: () => {},
  clearFormData: () => {},
});

export default function ModalContextProvider({ children }) {
  const [isOpen, setIsOpen] = useState(null);
  const [currentView, setCurrentView] = useState(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    street: "",
    ["postal-code"]: "",
    city: "",
  });
  function onFormDataChange(e) {
    const { value, name } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  }
  function clearFormData() {
    setFormData({});
  }

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
    formData: formData,
    closeModal: closeModal,
    openModal: handleModalOpening,
    changeView: handleViewChange,
    changeFormData: onFormDataChange,
    clearFormData,
  };

  return (
    <modalContext.Provider value={modalCtx}>{children}</modalContext.Provider>
  );
}
