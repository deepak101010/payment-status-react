import React from "react";

const StatusBox = ({ status, current, formattedTime, onClose }) => {
  return (
    <div className="status-box">
      <button className="close-btn" onClick={onClose}>
        &times;
      </button>
      <div className="modal-header-section">
        {status === "processing" && current.timer > 0 && (
          <div className="status-indicator timer">{formattedTime}</div>
        )}
        {current.icon && (
          <div className={`status-indicator ${status}-circle`} style={{ backgroundColor: current.color }}>
            {current.icon}
          </div>
        )}
        <h3>{current.title}</h3>
        <p>{current.text}</p>
      </div>
    </div>
  );
};

export default StatusBox;
