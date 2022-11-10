import React from "react";
import { MdDateRange } from "react-icons/md";
function LatestUpdateCard(props) {
  // console.log(props);
  return (
    <section className=" tw-text-white  tw-rounded-xl latest latest--greyscale tw-m-6">
      <img className="latest__img" src={props.img} alt="latest__news" />
      <section className="tw-p-8">
        <div className="tw-flex tw-justify-between">
          <span className="token token--greyscale token--large">News</span>
          <span className="tw-flex tw-items-center">
            <MdDateRange color="white" />
            <span className="latest__date tw-pl-4">09/11/2022</span>
          </span>
        </div>
        <article className="tw-pt-3">
          <h3>Lorem ipsum</h3>
          <p className="tw-pt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
        </article>
        <button className="btn btn--primary btn--gradient slider__btn tw-rounded-lg">
          <span>Read More</span>
          <span className="btn--background">
            <img
              className="btn__arrow"
              src={require("../../../assets/greater.svg").default}
              alt=""
            />
          </span>
        </button>
      </section>
    </section>
  );
}

export default LatestUpdateCard;
