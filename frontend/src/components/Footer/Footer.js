import React from "react";

import "./Footer.css";

const Footer = props => {
  return (
    <>
      {console.log("Rendering Footer")}
      <footer class="footer fixed-bottom">
        <div class="container text-white text-center">
          <small> Visa Bug </small>
        </div>
      </footer>
    </>
  );
};

export default Footer;
