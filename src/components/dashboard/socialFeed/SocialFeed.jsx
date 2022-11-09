import React from "react";
import socialFeedData from "./socialFeedData";
import SocialFeedCard from "./SocialFeedCard";
function SocialFeed() {
  return (
    <div >
      <header className="tw-relative social__feed__header">
        <h2 className="division__heading-back">Social Feed</h2>
      </header>
      <section className="social__feed__card__container">
        {socialFeedData.map((item, index) => (
          <SocialFeedCard item={item} key={index} />
        ))}
      </section>
    </div>
  );
}

export default SocialFeed;
