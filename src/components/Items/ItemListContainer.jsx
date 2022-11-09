import React from 'react'
import ItemCard from './ItemCard'
import bringData from '../../Services/mockService'
import { useState, useEffect } from 'react'

function ItemListContainer(props) {
  const [products, setProducts] = useState([]);
  async function getDataAsync(){
    let response = await bringData();
    setProducts(response);
  }

  useEffect(() => {
    getDataAsync();
  }, []);

  return (
    <div className='item-list'>
      {products.map((product) => {
        return(
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
        )
      })}
    </div>
  )
}

export default ItemListContainer