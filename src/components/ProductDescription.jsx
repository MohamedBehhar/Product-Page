import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {FaPlus} from 'react-icons/fa'
import {FaMinus} from 'react-icons/fa'
import { useGlobalContext } from '../Context'

const ProductDescription = () => {
  
  const {increamentCounter, decreamentCounter, productCounter, setCart} = useGlobalContext();
  
  
  const addToCart = () => {
    if (productCounter >=1)
		  setCart(1);
	}

  return (
	<div className='product-desc'>
    <p className='orange-heaeder'>Sneaker Company</p>
    <h1>Fall Limited Edition Sneakers</h1>
    <p className='main-des'>
    These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
    </p>
    <div className="price">
      <h2>$125.00</h2>
      <p className="disc">50%</p>
    </div>
    <p className='old-price'>
    $250.00
    </p>
    <div className="cla">
      <div className="quantity">
        <FaPlus className="operator" onClick={ increamentCounter}/>
        {productCounter}
        <FaMinus className="operator" onClick={decreamentCounter}/>
      </div>
      <button className="add-to-cart" onClick={ addToCart}>
        <AiOutlineShoppingCart />
        <p>Add to cart</p>
      </button>
    </div>
  </div>
  )
}

export default ProductDescription