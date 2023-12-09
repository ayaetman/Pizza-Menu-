import React from "react";

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We’re open from {openHour}:00 untill {closeHour}:00. come visit us or
        order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

export default Order;
