import React from 'react'

function ItemCard(props) {
  return (
    <div className='card'>
        <div className="card-img">
            <img src={`/Assets/Img/Designs/${props.id}.jpg`} alt={props.title}/>
        </div>
        <div className="description">
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
        </div>
        <div className="buttons">

        </div>
    </div>
  )
}

export default ItemCard