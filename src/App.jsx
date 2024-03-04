import Header from "./components/Header/Header";
import PageLayout from "./layout/PageLayout";
import FoodList from "./components/Food/FoodList/FoodList";
import Modal from "./components/Modal/Modal";

function App() {
  return (
    <>
      <Modal open={true} />
      <Header />
      <PageLayout className={"w-[min(65rem,100vw-4rem)]"}>
        <FoodList />
      </PageLayout>
    </>
  );
}

export default App;
