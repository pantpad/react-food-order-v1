import Header from "./components/Header/Header";
import PageLayout from "./layout/PageLayout";
import FoodList from "./components/Food/FoodList/FoodList";
import Modal from "./components/Modal/Modal";

import FoodContextProvider from "./store/food-context";
import ModalContextProvider from "./store/modal-context";

function App() {
  //console.log("App");
  return (
    <FoodContextProvider>
      <ModalContextProvider>
        <Modal></Modal>
        <Header />
      </ModalContextProvider>
      <PageLayout className={"w-[min(60rem,100vw-4rem)]"}>
        <FoodList />
      </PageLayout>
    </FoodContextProvider>
  );
}

export default App;
