import React from "react";
import contactUsImage from "../../assets/img/contact-us.jpg";
import "./contacts.css";

function Contacts() {
  return (
    <>
      <div class="d-flex bd-highlight mb-3">
        <div class="p-2 bd-highlight">Flex item</div>
        <div class="p-2 bd-highlight">Flex item</div>
        <div class="ml-auto bd-highlight">
          <img src={contactUsImage} class="contactus" />
        </div>
      </div>
    </>
  );
}

export default Contacts;
