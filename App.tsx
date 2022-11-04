import * as React from 'react';
//import './App.css';


import Modal from"./Modal"

const App = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [openModal, setOpenModal ] = React.useState(false);

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenuOne = () => {
    // do something
    setModalOpen(true);
    console.log("Show Modal");
    setOpen(false);
  };

   return (
    <div className="dropdown">
      <button onClick={handleOpen}>Dropdown</button>
      {open ? (
        <ul className="menu">
          <li className="menu-item">
            <button onClick={handleMenuOne}>Show Modal</button>
          </li>
          
        </ul>
      ) : null}
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
  );
};

export default App;