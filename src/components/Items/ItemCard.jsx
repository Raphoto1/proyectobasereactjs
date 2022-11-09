import React from 'react'
import LinkShops from './LinkShops'

function ItemCard(props) {
  return (
    <div className='card'>
        <div className="card-img">
            <img src={`/Assets/Img/Designs/${props.id}.jpg`} alt={props.title}/>
        </div>
        <div className="card-detail">
            <h2>{props.title}</h2>
            <h3>Style</h3>
            <p>{props.style}</p>
            <p>{props.desc}</p>
        </div>
        <div className="checkDetails">
          <button className='checkDetailsBtn'>Check details</button>
        </div>
        <div className="buttons">
            <LinkShops
            shop1={props.shop1}
            shop2={props.shop2}
            shop3={props.shop3}
            />
        </div>
    </div>
  )
}

export default ItemCard