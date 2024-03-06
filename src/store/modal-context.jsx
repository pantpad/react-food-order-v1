import { useState, createContext } from "react";

import { validateMap } from "../utils/fieldValidation";

export const modalContext = createContext({
  isOpen: false,
  currentView: null,
  formData: {},
  formDataValues: {},
  closeModal: () => {},
  openModal: () => {},
  changeView: () => {},
  changeFormData: () => {},
  clearFormData: () => {},
  onErrorShow: () => {},
});

export default function ModalContextProvider({ children }) {
  const [isOpen, setIsOpen] = useState(null);
  const [currentView, setCurrentView] = useState(null);

  const [formData, setFormData] = useState({
    fullName: { value: "", error: "", showError: false },
    email: { value: "", error: "", showError: false },
    street: { value: "", error: "", showError: false },
    ["postal-code"]: { value: "", error: "", showError: false },
    city: { value: "", error: "", showError: false },
  });

  console.log(formData);

  function returnFormDataValues() {
    const formDataObj = {};
    for (let prop in formData) {
      formDataObj[prop] = formData[prop].value;
    }
    return formDataObj;
  }

  function onFormDataChange(e) {
    const { value, name } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: {
          ...prev[name],
          value: value,
          error: value !== "" ? validateMap[name](value) : "Field is Empty",
        },
      };
    });
  }

  function onErrorShow(e) {
    const { name } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: { ...prev[name], showError: true } };
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
    formDataValues: returnFormDataValues(),
    closeModal: closeModal,
    openModal: handleModalOpening,
    changeView: handleViewChange,
    changeFormData: onFormDataChange,
    clearFormData,
    onErrorShow,
  };

  return (
    <modalContext.Provider value={modalCtx}>{children}</modalContext.Provider>
  );
}
