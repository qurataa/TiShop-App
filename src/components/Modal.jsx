import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const BackdropOverlay = () => {
  return <div 
  className="fixed top-0 left-0 w-full h-screen z-20 bg-black bg-opacity-75 "
   />;
};

const ModalOverlay = ({ children, showModal, handleHideModalCart }) => {
  return (
    <div className={`fixed  top-0 left-0 w-full h-screen flex items-center justify-center z-30 transition-all duration-300 ease-in-out ${showModal ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
    onClick={() => handleHideModalCart()}>
      <div className="bg-white p-4 rounded-lg shadow-lg text-gray-900 mx-2  "
      onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("modal");

const Modal = ({ children, handleHideModalCart }) => {
  const [showModal,setShowModal] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowModal(true)
    },50);

    return () => clearTimeout(timeout)
  },[])
  
  return (
    <div>
      {ReactDOM.createPortal(<BackdropOverlay />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay showModal={showModal} handleHideModalCart={handleHideModalCart}>{children}</ModalOverlay>, portalElement)}
    </div>
  );
};

export default Modal;
