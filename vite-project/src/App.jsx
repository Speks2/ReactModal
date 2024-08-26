import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '/src/Modal.module.scss'


const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modalWrapper" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="closeButton" onClick={onClose}>
          Luk
        </button>
        <div className="modalContent">
          {children}
        </div>
      </div>
    </div>
  );
};

// Hovedkomponent
const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div>
      <button onClick={toggleModal}>Åbn Modal</button>
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <h2>Dette er indholdet i modalen</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A minima odio at est voluptatum, ratione odit rerum amet quidem sint id qui soluta, aut cum in nobis! Odio, provident velit.</p>
      </Modal>
    </div>
  );
};

export default App;

