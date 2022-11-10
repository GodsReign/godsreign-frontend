import React from "react";
import "./LiveBar.css";
import LivePlayers from "./livePlayers";
import socialIcons from "./socialicons";
import livePlayerData from "./livePlayerData";
import SocialMediaIcons from "./socialMediaIcons";
function LiveBar() {
  return (
    <section className="container livebar livebar--flex bg-greyscale">
      <section className="livebar__header">
        <p className="livebar__heading text-white">Live Players</p>
        <ul className="list__items">
          {livePlayerData.map((item, index) => (
            <LivePlayers img={item.img} key={index} index={index} />
          ))}
        </ul>
      </section>
      <section className="social__icons">
        <ul className="list__items">
          {socialIcons.map((item, index) => {
            return <SocialMediaIcons img={item.img} key={index} />;
          })}
        </ul>
      </section>
    </section>
  );
}

export default LiveBar;
