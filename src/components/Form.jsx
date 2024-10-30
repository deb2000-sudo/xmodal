import { useState } from "react";
import React from "react";
import styles from "./Form.module.css";
import ModalApp from "./Modal/ModalApp";
const Form = () => {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [openModal,setOpenModal]=useState(false);
  const modalBackground = {
    height: "100vh",
    backdropFilter: openModal ? "blur(1px)" : "none",
    transition: "backdrop-filter 0.3s ease",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  const handleClick = () => {
    console.log(1);
    setIsOpenForm((prev)=>!prev);
    setOpenModal(true);
    console.log(isOpenForm);
  };
  return (
    <div style={modalBackground}>
      <h1>User Details Modal</h1>
      <button onClick={handleClick} className={styles.modalButton}>
        Open Form
      </button>

      {isOpenForm && (
        <ModalApp
        setIsOpenForm={setIsOpenForm}
        setOpenModal={setOpenModal}
        ></ModalApp>
      )}
    </div>
  );
};
export default Form;
