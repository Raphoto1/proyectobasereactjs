import React, { useState } from "react";

function ItemCounter({stock, onAddToCart, text}) {
    //se crea espacio de conteo
    const [count, setCount] = useState(1);
    
    function handleAdd() {
        if (count < stock) setCount(count + 1);
      }
      
      function handleSubstract() {
        if (count > 1) setCount(count - 1);
      }

    return (
    <div className="itemCounter_container">
      <div className="itemCounter_control">
        <button className="substract" onClick={handleSubstract}>
            -
        </button>
        <span>
            {count}
        </span>
        <button className="substract" onClick={handleAdd}>
            +
        </button>
        <button className="addToCart" onClick={()=> onAddToCart(count)}>
            {text}
        </button>
      </div>
    </div>
  );
}

export default ItemCounter;
