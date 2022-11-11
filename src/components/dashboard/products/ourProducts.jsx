import React from "react";
import productData from "./productData";
import Products from "./productCard";
function OurProducts() {
  return (
    <section className="products tw-flex tw-relative  ">
      <h3 className="products__heading tw-absolute ">Our Products</h3>
      {productData.map((item, index) => (
        <Products img={item.img} key={index} />
      ))}
    </section>
  );
}

export default OurProducts;
