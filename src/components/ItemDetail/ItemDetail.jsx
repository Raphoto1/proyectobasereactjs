import React from 'react'

function ItemDetail({product}) {
  console.log(product.id);
  return (
    <div className="itemDetail">
      <h1>{product.title}</h1>
      <img src={`/Assets/Img/Designs/${product.id}.jpg`} alt={product.title}/>
    </div>
  )
}

export default ItemDetail