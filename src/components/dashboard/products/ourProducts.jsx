import React from "react";
import productData from "./productData";
import Products from "./productCard";
function OurProducts() {
  return (
    <section className="products">
      <header className="tw-flex products__header">
        <h3 className="products__heading">Our Products</h3>
        <button className="products__all-btn tw-text-white">View All</button>
      </header>
      <section className="tw-flex products__cart__container">
        {productData.map((item, index) => (
          <Products img={item.img} key={index} />
        ))}
      </section>
    </section>
  );
}

export default OurProducts;
