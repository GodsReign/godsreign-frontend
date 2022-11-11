import React from "react";
import socialFeedData from "./socialFeedData";
import SocialFeedCard from "./SocialFeedCard";
import SectionHeader from "../sectionHeader";
function SocialFeed() {
  return (
    <section>
      <SectionHeader text={"Social Feed"} />
      <section className="social__feed__card__container">
        {socialFeedData.map((item, index) => (
          <SocialFeedCard item={item} key={index} />
        ))}
      </section>
    </section>
  );
}

export default SocialFeed;
