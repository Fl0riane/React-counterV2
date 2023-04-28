import { useState } from "react";
import "./App.css";
import Footer from "./assets/components/Footer";
import Header from "./assets/components/Header";
import Calculator from "./assets/components/Calculator";

function App() {
  const [tab, setTab] = useState({ Calculator });
  const [counter, setCounter] = useState(0);

  return (
    <main className="main">
      <Header />
      <section>
        {/* <button
          onClick={() => {
            const tabCopy = [...tab];
            tabCopy.push({ Calculator });
            setTab(tabCopy);
          }}
        >
          Add counter
        </button> */}
        <Calculator counter={counter} setCounter={setCounter} />
      </section>
      <Footer />
    </main>
  );
}

export default App;
