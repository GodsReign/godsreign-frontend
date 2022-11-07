import React from "react";
import "../css/LiveBar.css";
import LivePlayers from "./livePlayers";
function LiveBar() {
  const curPlayers = [
    {
      img: require("../../assets/livebar-image-1.svg").default,
    },
    {
      img: require("../../assets/livebar-image-1.svg").default,
    },
    {
      img: require("../../assets/livebar-image-1.svg").default,
    },
  ];
  const socialIcons = [
    { img: require("../../assets/facebook.svg").default },
    { img: require("../../assets/instagram.svg").default },
    { img: require("../../assets/discord.svg").default },
    { img: require("../../assets/twitter.svg").default },
    { img: require("../../assets/linkedin.svg").default },
  ];
  return (
    <div className="bg-dark">
      <section className="container livebar livebar--flex">
        <section className="livebar__header">
          <p className="livebar__heading text-white">Live Players</p>
          <ul className="list__items">
            {curPlayers.map((item, index) => (
              <LivePlayers img={item.img} key={index} index={index} />
            ))}
          </ul>
        </section>
        <section className="social__icons">
          <ul className="list__items">
            {socialIcons.map((item, index) => {
              return <LivePlayers img={item.img} key={index} />;
            })}
          </ul>
        </section>
      </section>
    </div>
  );
}

export default LiveBar;
