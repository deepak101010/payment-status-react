import React, { useState } from "react";
import PaymentForm from "./components/PaymentForm";
import PaymentModal from "./components/PaymentModal";
import "./assets/modal.css";

const App = () => {
  const initialForm = {
    amount: "100",
    account: "9283649056",
    sender: "Punish",
    paymentType: "IMPS",
    status: "success",
  };

  const [form, setForm] = useState(initialForm);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setForm(initialForm);
  };

  return (
    <div className="container-form">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        Payment Simulation Form
      </h2>

      <PaymentForm form={form} handleChange={handleChange} handleSubmit={handleSubmit} />

      {showModal && <PaymentModal data={form} onClose={closeModal} />}
    </div>
  );
};

export default App;
