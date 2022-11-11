import products from "../data/designs.json"

import React from 'react'

function bringData(idCategory) {
  return new Promise((resolve) => {
    if (idCategory === undefined) {
      setTimeout(() => {
        resolve(products)
    }, 1000);
    } else {
      setTimeout(() => {
      let requestedCat = products.filter((item) => item.style === idCategory)
        resolve(requestedCat)
    }, 1000);
    }
    
  });
}

export function getSingleItem(idItem) {
  return new Promise((resolve, reject) => {
    let itemRequest = products.find((item) => item.id === Number(idItem));
    if(itemRequest === undefined) reject("Item no encontrado");
    console.log(products.id);
    setTimeout(() => {
        resolve(itemRequest)
    }, 1000);
  });
}

export default bringData