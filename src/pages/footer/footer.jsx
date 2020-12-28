import React from "react";
import "./footer.css";

const FooterPanel = () => {
  return (
    <div>
      <div className="py-2 text-center footer-style">© CHefLyF &nbsp; {new Date().getFullYear()}</div>
    </div>
  );
};

export default FooterPanel;