import React from 'react'
import { useGlobalContext } from '../Context'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineShoppingCart} from 'react-icons/ai'


function Navbar() {
	const {openSideBar,setShowCart, showCart} = useGlobalContext();

	const handleOnclick = () => {
		// openLightbox();
		openSideBar();
	}

	const handleCart = () => {
		setShowCart(!showCart)
	}
  return (
	<nav>
		<GiHamburgerMenu className='burger' onClick={handleOnclick}/>
		<img src='images/logo.svg' alt="logo" className='logo' />
		<ul className="links">
			<li> Collections</li>
			<li> Men</li>
			<li> Women</li>
			<li> About</li>
		</ul>
		<div className="user">
			<AiOutlineShoppingCart className='cart' onClick={handleCart}/>
			<img src="images/image-avatar.png" alt="user" className='user-image' onClick={handleCart}/>
		</div>
	</nav>
  )
}

export default Navbar

