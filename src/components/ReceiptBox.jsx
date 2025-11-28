import React from "react";

const ReceiptBox = ({ amount, account, sender, paymentType, adminFee, numberToWords, buttonText, onClose }) => {
  const mockPaymentTime = "25/03/23 12:13";

  return (
    <div className="receipt-container">
      <div className="receipt-box">
        <h1>₹{amount || "0"}</h1>
        <p className="in-words">Rupees {numberToWords(amount)} Only</p>
        <div className="details">
          <p><span>Account number</span> {account || "N/A"}</p>
          <p><span>Payment time</span> {mockPaymentTime}</p>
          <p><span>Sender's name</span> {sender || "N/A"}</p>
          <p><span>Payment type</span> {paymentType || "N/A"}</p>
          <p><span>Admin fee</span> ₹{adminFee}</p>
          <p><span>Amount</span> ₹{amount || "0"}</p>
        </div>
      </div>
      {buttonText && <button className="primary-btn" onClick={onClose}>{buttonText}</button>}
    </div>
  );
};

export default ReceiptBox;
