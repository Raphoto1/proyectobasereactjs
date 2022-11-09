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
    <div className='itemList'>
      {products.map((product) => {
        return(
          <ItemCard
            key={product.id}
            id={product.id}
            imgUrl={product.photo}
            title={product.title}
            desc={product.text}
          />
        )
      })}
    </div>
  )
}

export default ItemListContainer