import { useState } from "react";
import React from "react";
import styles from "./Form.module.css";
import ModalApp from "./Modal/ModalApp";
const Form = () => {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const handleClick = () => {
    // console.log(1);
    setIsOpenForm((prev) => !prev);
  };
  return (
    <div className={styles.myapp}>
      <h1>User Details Modal</h1>
      <button className={styles.mybutton} onClick={handleClick}>
        Open Form
      </button>

      {isOpenForm && (
        <div className="modal">
          <ModalApp
            isModalOpen={isOpenForm}
            setIsOpenForm={setIsOpenForm}
          ></ModalApp>
        </div>
      )}
    </div>
  );
};
export default Form;
