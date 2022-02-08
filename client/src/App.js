import "./App.css";
import Meals from "./components/Meals/Meals";
import Footer from "./components/UI/Footer";
import Header from "./components/UI/Header";

function App() {
  return (
    <div>
      <Header />

      <Meals />
      <Footer />
    </div>
  );
}

export default App;
