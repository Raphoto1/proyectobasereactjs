import products from "../data/designs.json"

import React from 'react'

function bringData() {
  return new Promise((resolve) => {
    setTimeout(() => {
        resolve(products)
    }, 2000);
  });
}

export default bringData