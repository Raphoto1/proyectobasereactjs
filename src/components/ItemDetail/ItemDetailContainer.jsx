import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {getSingleItem} from "../../Services/mockService";
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
  const [product, setProduct] = useState([])
  const {idItem} = useParams();

  async function getItemsAsync(){
    let answer = await getSingleItem(idItem);
    setProduct(answer);
  }
  
  useEffect(() => {
    getItemsAsync();
  },[])

  return (
    <ItemDetail product={product}/>
  )
}

export default ItemDetailContainer