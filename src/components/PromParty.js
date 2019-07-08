import React from "react";
import textService from "../services/text-service";

const PromParty = () => {
  window.scrollTo(0, 0);
  return (
    <section className="prom-party slide-in-fwd-center">
      <div className="cover-img">
        <img src="https://res.cloudinary.com/explority/image/upload/v1559317248/dawn-1840298_1920_ryrobu.jpg" />
      </div>
      <div className="prom-party-content">
        <p>{textService.promPraty}</p>
        <br />

        <p>
          תהליך העבודה:
          <br />
          {textService.promPartyWork}
        </p>
      </div>
    </section>
  );
};

export default PromParty;
