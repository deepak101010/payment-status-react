import React, { useState, useEffect } from "react";
import StatusBox from "./StatusBox";
import ReceiptBox from "./ReceiptBox";

// Convert number to words
const numberToWords = (n) => {
  if (!n) return "Zero";
  try {
    const num = parseFloat(n);
    if (num === 100) return "One Hundred";
  } catch {
    return "Amount Entered";
  }
  return "Amount Entered";
};

const PaymentModal = ({ data, onClose }) => {
  const { status, amount, account, sender, paymentType, adminFee = 50 } = data;
  const [timeLeft, setTimeLeft] = useState(58);

  useEffect(() => {
    if (status !== "processing") return;
    const timer = setInterval(() => setTimeLeft((t) => (t > 0 ? t - 1 : 0)), 1000);
    return () => clearInterval(timer);
  }, [status]);

  const statusInfo = {
    success: {
      icon: "✔",
      color: "#22c55e",
      title: "Payment Success",
      text: "Your payment was successful. A detailed receipt has been generated below.",
    },
    failed: {
      icon: "✖",
      color: "#ef4444",
      title: "Payment Failed",
      text: "There was an issue processing your payment. Please try again or contact support.",
    },
    processing: {
      icon: null,
      color: "#f59e0b",
      title: "Processing Payment",
      text: "This may take a few moments. Please do not refresh the page.",
      timer: timeLeft,
    },
  };

  const current = statusInfo[status];
  const formattedTime = `0:${current.timer < 10 ? `0${current.timer}` : current.timer}`;
  const buttonText = status === "failed" ? "Try Again" : null;

  return (
    <div className="modal-overlay">
      <div className="modal-wrapper">
        <StatusBox status={status} current={current} formattedTime={formattedTime} onClose={onClose} />
        <ReceiptBox
          amount={amount}
          account={account}
          sender={sender}
          paymentType={paymentType}
          adminFee={adminFee}
          numberToWords={numberToWords}
          buttonText={buttonText}
          onClose={onClose}
        />
      </div>
    </div>
  );
};

export default PaymentModal;
