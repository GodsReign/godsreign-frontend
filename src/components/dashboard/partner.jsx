import React from "react";
import partnerLogo from "../../assets/partner_logo.svg";
function Partner() {
  return (
    <div className="tw-flex tw-items-center tw-mt-24">
      <h3 className="partner__heading">Official Commercial Partner</h3>
      <img src={partnerLogo} alt="DNA_logo" />
    </div>
  );
}

export default Partner;
