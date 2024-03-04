import Header from "./components/Header/Header";
import PageLayout from "./layout/PageLayout";
import FoodList from "./components/Food/FoodList/FoodList";

function App() {
  return (
    <>
      <Header></Header>
      <PageLayout className={"w-[min(65rem,100vw-2rem)] border border-red-100"}>
        <FoodList></FoodList>
      </PageLayout>
    </>
  );
}

export default App;
