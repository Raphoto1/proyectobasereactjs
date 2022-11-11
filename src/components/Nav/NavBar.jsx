import React from 'react'
import CartWitget from './CartWitget'
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav id='navega' className='navegaReact'>
        <div className='logoNav'>
            <Link to="/">
                <img src="/Assets/Icons/IconoR.png" alt="IconoRafa" />
            </Link>
        </div>
        <div className="search">
            <input type="text" />
        </div>
        <div className="navGroupList">
            <ul className="burguerList">
                <li>
                    <h3>Filter by styles</h3>
                </li>
                <li>
                    <Link to="/category/Traditional">Traditional</Link>
                </li>
                <li>
                    <Link to="/category/Digital">Digital</Link>
                </li>
                <li>
                    <Link to="/category/Photography">Photography</Link>
                </li>
                <li>
                    <CartWitget amount="3"/>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default NavBar