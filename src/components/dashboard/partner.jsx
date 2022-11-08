import React, { useState } from "react";
import partnerLogo from "../../assets/partner_logo.svg";
import partnerLogoHover from "../../assets/partner_logo_gold.svg"
function Partner() {
  const [logo, setLogo] = useState(partnerLogo);
  const handleMouseOver = (e) => {
    setLogo(partnerLogoHover);
    e.target.setAttribute('style', 'transform:scale(1.05)');
  };
  const handleMouseOut = (e) => {
    setLogo(partnerLogo)

    e.target.setAttribute("style", "transform:scale(1.0)");

  }
  return (
    <div className="tw-flex tw-items-center tw-mt-24">
      <h3 className="partner__heading">Official Commercial Partner</h3>
      <img onMouseOver={(e) => handleMouseOver(e)} onMouseOut={(e)=>handleMouseOut(e)} src={logo} alt="DNA_logo" className="partner__logo" />
    </div>
  );
}

export default Partner;
