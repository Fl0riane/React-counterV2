import { useState } from "react";
import "./App.css";
import Footer from "./assets/components/Footer";
import Header from "./assets/components/Header";
import Calculator from "./assets/components/Calculator";

function App() {
  const [counter, setCounter] = useState(0);
  const tab = [];
  const handleclick = () => {
    if (counter < 3) {
      const tabCopy = [...tab];
      tabCopy.push([Calculator]);
      return [tabCopy];
    }
  };

  return (
    <main className="main">
      <Header />
      <section>
        <button onClick={handleclick}>Add counter</button>

        <Calculator counter={counter} setCounter={setCounter} />
      </section>
      <Footer />
    </main>
  );
}

export default App;
