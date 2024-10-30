import React, { useState } from "react";

const ModalApp = ({ setIsOpenForm, setOpenModal }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });
  // console.log(isModalOpen);
  const handleModalClose = () => {
    setIsOpenForm((prev) => !prev);
    setOpenModal((prev) => !prev);
    setFormData((prevData) => ({
      ...prevData,
      username: "",
      email: "",
      phone: "",
      dob: "",
    }));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const validateDOB = (dob) => {
    const dobRegex = /^\d{4}-\d{2}-\d{2}$/; // YYYY-MM-DD format
    return dobRegex.test(dob);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      alert("Invalid email. Please check your email address.");
      return;
    }

    if (!validatePhone(formData.phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }

    if (!validateDOB(formData.dob)) {
      alert(
        "Invalid date of birth. Please enter the date in YYYY-MM-DD format."
      );
      return;
    }
    console.log("Form Data Submitted:", formData);
    handleModalClose();
  };

  return (
    <div class="modal" onClick={handleModalClose}>
      <div
        className="modal-content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h3 className="text-center mb-4">Fill Details</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label>Username:</label>
            <input
              id="username"
              type="text"
              name="username"
              className="form-control"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label>Email Address:</label>
            <input
              id="email"
              type="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label>Phone Number:</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              className="form-control"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mb-4">
            <label>Date of Birth:</label>
            <input
              id="dob"
              type="date"
              name="dob"
              className="form-control"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalApp;
