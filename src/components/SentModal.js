import React from "react";
const SentModal = props => {
  if (props.show)
    return (
      <section className="sent-modal slide-in-fwd-center">
        <h4 className="message">ההודעה נשלחה בהצלחה</h4>
        <button onClick={props.closeModal}>אישור</button>
      </section>
    );
  else return null;
};

export default SentModal;
