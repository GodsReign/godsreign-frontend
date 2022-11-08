import React from "react";
import Cart from "./cart";
function Products(props) {
  return (
    <section className="shopping-cart shopping-cart--outline tw-ml-8">
      <img src={props.img} alt="black_jersey" className="shopping-cart__img" />
      <section className="shopping-cart__header">
        <h4 className="tw-text-white">Home Jersey 2022-23</h4>
        <p className="shopping-cart__desc">
          Gods Reign Official Home Jersey 2022-2023
        </p>
      </section>
      <Cart />
    </section>
  );
}

export default Products;
