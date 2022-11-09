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
                    <h3>Filter by styles</h3>
                </li>
                <li>
                    <a href="/">Traditional</a>
                </li>
                <li>
                    <a href="/">Digital</a>
                </li>
                <li>
                    <a href="/">Photography</a>
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