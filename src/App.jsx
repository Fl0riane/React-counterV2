import { useState } from "react";
import "./App.css";
import Footer from "./assets/components/Footer";
import Header from "./assets/components/Header";
import Calculator from "./assets/components/Calculator";

function App() {
  const [obj, setObj] = useState({ Calculator });
  const [counter, setCounter] = useState(0);

  return (
    <main className="main">
      <Header />
      <section>
        <button
          className="add"
          onClick={() => {
            const objCopy = { ...obj };
            tabCopy.push({ Calculator });
            setTab(objCopy);
          }}
        >
          Add counter
        </button>
        <Calculator counter={counter} setCounter={setCounter} />
      </section>
      <Footer />
    </main>
  );
}

export default App;
