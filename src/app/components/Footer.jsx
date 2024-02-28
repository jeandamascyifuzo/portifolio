import React from "react";

const Footer = () => {
  const data = [];
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>{""}</span>
        <p className="text-slate-400">
          {" "}
          © {new Date().getFullYear()} Jean Portfolio, All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
