import React from "react";

function SocialFeedCard(props) {
  return (
    <div className="social__feed__card tw-m-8">
      <img src={props.item.img} alt="social__feed" className="tw-rounded-xl" />
      <p className="social__feed__content">{props.item.content}</p>
    </div>
  );
}

export default SocialFeedCard;
