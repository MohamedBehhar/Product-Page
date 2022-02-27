import React from 'react'
import {FaTrashAlt} from 'react-icons/fa'
import { useGlobalContext } from '../Context'
const Cart = () => {
	const {productCounter, productPrice, cart,setCart, showCart,} = useGlobalContext();
	let total = productPrice * productCounter;


  return (
	<div className={`${showCart? 'cart-component show-cart-component' : 'cart-component'}`}>
		<p className='cart-header'>Cart</p>
		<h3 className={`${!cart? "empty-cart show-empty-cart" : 'cart-product'}`}>your cart is empty</h3>
		<div className={`${cart? "cart-product show-cart-product" : 'cart-product'}`}>
			<img src="./images/image-product-1-thumbnail.jpg" alt="cart" className='cart-image' />
			<div className="cart-text">
				<p>fall limited edition sneackers</p>
				<div className="total">
					<p className="price">${productPrice}.00</p>
					<p>x</p>
					<p className="amount">{productCounter}</p>
					<h4 className="cart-total">${total}</h4>
					<FaTrashAlt className='trash-icon' onClick={ () => setCart(0)}/>
				</div>
			</div>
		</div>
		<button className={`${cart? "checkout show-checkout" : 'checkout'}`}>Checkout</button>
	</div>
  )
}

export default Cart