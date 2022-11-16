import React, { useState } from "react";
import { Button } from "react-bootstrap";

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
      <Button variant="success" className="substract" onClick={handleAdd}>
            +
        </Button>
        <span>
            {count}
        </span>
        <Button variant="danger" className="substract" onClick={handleSubstract}>
            -
        </Button>
        <Button className="addToCart" onClick={()=> onAddToCart(count)}>
            {text}
        </Button>
      </div>
    </div>
  );
}

export default ItemCounter;
