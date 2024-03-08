import React, { useEffect } from "react";
import "./Toast.css";

const Toast = ({ className, header, content, duration = 3000 }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      document.querySelector(`.${className}`).style.display = "none";
    }, duration);

    return () => clearTimeout(timeout);
  }, [className, duration]);

  return (
    <div className={className}>
      <div className="toast-header">{header}</div>
      <div className="toast-content">{content}</div>
    </div>
  );
};

export default Toast;
