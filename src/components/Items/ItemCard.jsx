import React from "react";
import FavButton from "../Buttons/FavButton";
import LinkShops from "./LinkShops";
import {Link} from "react-router-dom"

function ItemCard(props) {
  const urlDetail = `/detail/${props.id}`;
  return (
    <div className="card">
      <FavButton icon="♥" />
      <div className="card-img">
        <img src={`/Assets/Img/Designs/${props.id}.jpg`} alt={props.title} />
      </div>
      <div className="card-detail">
        <h2>{props.title}</h2>
        <h3>Style</h3>
        <p>{props.style}</p>
        <p>{props.desc}</p>
      </div>
      <div className="checkDetails">
        <Link to={urlDetail}>
          <button className="checkDetailsBtn">Check details</button>
        </Link>
      </div>
      <div className="buttons">
        <LinkShops
          shop1={props.shop1}
          shop2={props.shop2}
          shop3={props.shop3}
        />
      </div>
    </div>
  );
}

export default ItemCard;
