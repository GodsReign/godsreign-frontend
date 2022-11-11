import React from "react";

function sectionHeader(props) {
  return (
    <header className="section__header">
      <h2 className="section__heading">{props.text}</h2>
      <span className="section__bg__heading">{props.text}</span>
    </header>
  );
}

export default sectionHeader;
