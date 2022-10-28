import React from 'react'

function CartWitget(props) {
  return (
    <div className='cartGroup'>
      <a href="/">
        <h1>{props.amount}</h1>
        <img className='shoppingCartIcon' src='./assets/Icons/ShoppingCart.png'/>
      </a>
      
    </div>
  )
}

export default CartWitget