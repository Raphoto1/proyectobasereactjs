import React from 'react'
import ItemCounter from '../Buttons/ItemCounter';

function ItemDetail({product}) {
  
  function onAddToCart(count) {
    alert(`You have add ${count} of ${product.title} to your Cart`)
  }

  return (
    <div className="itemDetail">
      <div className='descDetail'>
        <h1>{product.title}</h1>
        <p>{product.text}</p>
      </div>
      <img src={`/Assets/Img/Designs/${product.id}.jpg`} alt={product.title}/>
      <ItemCounter className="itemCounter" onAddToCart={onAddToCart} stock={product.stock} text={"Add To Cart"}/>
    </div>
  )
}

export default ItemDetail