import React from "react";

const PaymentForm = ({ form, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <label>Amount</label>
      <input type="number" name="amount" value={form.amount} onChange={handleChange} required />

      <label>Account Number</label>
      <input type="text" name="account" value={form.account} onChange={handleChange} required />

      <label>Sender Name</label>
      <input type="text" name="sender" value={form.sender} onChange={handleChange} required />

      <label>Payment Type</label>
      <select name="paymentType" value={form.paymentType} onChange={handleChange} required>
        <option value="">Select Payment Type</option>
        <option value="IMPS">IMPS</option>
        <option value="NEFT">NEFT</option>
        <option value="RTGS">RTGS</option>
      </select>

      <label>Simulation Status</label>
      <select name="status" value={form.status} onChange={handleChange} required>
        <option value="success">Success</option>
        <option value="failed">Failed</option>
        <option value="processing">Processing</option>
      </select>

      <button type="submit">
        Show Modal for Status: {form.status.toUpperCase()}
      </button>
    </form>
  );
};

export default PaymentForm;
