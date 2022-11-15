import React from 'react'

function CartWitget(props) {
  return (
    <div className='cartGroup'>
      <a href="/">
        <h2>{props.amount}</h2>
        <img className='shoppingCartIcon' src='./assets/Icons/shoppingCart.png'/>
      </a>
      
    </div>
  )
}

export default CartWitget