import React from "react";
import ItemCard from "./ItemCard";
import bringData from "../../Services/mockService";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ItemListContainer(props) {
  const [products, setProducts] = useState([]);
  const { idCategory } = useParams();

  //traer la data
  async function getDataAsync() {
    let response = await bringData(idCategory);
    console.log(response);
    setProducts(response);
  }

  useEffect(() => {
    getDataAsync();
  }, [idCategory]);

  return (
    <>
      <div className="titleCat">
        <h1>{idCategory}</h1>
      </div>
      <div className="item-list">
        {products.map((product) => {
          return (
            <ItemCard
              key={product.id}
              id={product.id}
              imgUrl={product.photo}
              title={product.title}
              style={product.style}
              desc={product.text}
              shop1={product.shop1}
              shop2={product.shop2}
              shop3={product.shop3}
            />
          );
        })}
      </div>
    </>
  );
}

export default ItemListContainer;
