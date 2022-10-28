import React from 'react'
import CartWitget from './CartWitget'
function NavBar() {
  return (
    <nav id='navega' className='navegaReact'>
        <div className='logoNav'>
            <img src="/Assets/Icons/IconoR.png" alt="IconoRafa" />
        </div>
        <div className="search">
            <input type="text" />
        </div>
        <div className="navGroupList">
            <ul className="burguerList">
                <li>
                    <a href="/">Categoria 1</a>
                </li>
                <li>
                    <a href="/">Categoria 2</a>
                </li>
                <li>
                    <CartWitget/>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default NavBar