import React, { useState } from "react";
import { createPortal } from "react-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { CatApp } from "./components/CatApp";
import { Modal } from "./components/Modal/Modal";

function App() {
  const [ModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Navbar />
      <CatApp />
      <button onClick={() => setModalOpen(true)}>Open</button>
barev
      {ModalOpen &&
        createPortal(
          <Modal isOpen={ModalOpen} onClose={() => setModalOpen(false)}>
            <p>Hello</p>
          </Modal>,
          document.body
        )}
    </>
  );
}

export default App;
