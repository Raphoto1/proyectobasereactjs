import React from "react";
import ItemCounter from "../Buttons/ItemCounter";
import LinkShops from "../Items/LinkShops";

function ItemDetail({ product }) {
  function onAddToCart(count) {
    alert(`You have add ${count} of ${product.title} to your Cart`);
  }

  return (
    <div className="itemDetail">
      <div className="descDetail">
        <h1>{product.title}</h1>
        <h2>${product.price} usd</h2>
        <p>{product.text}</p>
        <div className="buttonsShops">
          <LinkShops
            shop1={product.shop1}
            shop2={product.shop2}
            shop3={product.shop3}
          />
        </div>
      </div>
      <img src={`/Assets/Img/Designs/${product.id}.jpg`} alt={product.title} />
      <ItemCounter
        className="itemCounter"
        onAddToCart={onAddToCart}
        stock={product.stock}
        text={"Add To Cart"}
      />
    </div>
  );
}

export default ItemDetail;
