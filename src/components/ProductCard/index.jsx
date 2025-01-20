import React from "react";
import propTypes from "prop-types"
import { BsFillCartPlusFill } from "react-icons/bs";

import formatCurrency from "../../utils/formatCurrency";

import './ProductCard.css'

function ProductCard({ product }) {
  const { title, price, thumbnail } = product;
  return (
    <section className='product-card'>
      <img 
        src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")} 
        alt="product" 
        className="card_image" 
      />
      <div className="card_infos">
        <p className="card_price">
          {formatCurrency(price)}
        </p>
        <h2 className="card_title">{title}</h2>
      </div>
      <button type="button" className="card_btn">
        <BsFillCartPlusFill />
      </button>
    </section>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  product: propTypes.shape({

  })
}.isRequired;
