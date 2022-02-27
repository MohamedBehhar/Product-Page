import React,{useState} from "react";
import images from "../images";
// import thumb from "../images";
import {GrFormNext} from 'react-icons/gr'
import {GrFormPrevious} from 'react-icons/gr'
import { useGlobalContext } from "../Context";

const ProductImages = () => {
	const {openLightbox}  = useGlobalContext();
	const [index, SetIndex] = useState(1);
	const setTumb = (id) =>{
		SetIndex(id);
	}
	const nextOrPrev = (str) => {
		let i = index;
		if (str === 'next')
			if (i < images.product.length ? SetIndex(i + 1) : SetIndex(1));
		if (str === 'prev')
			if (i <= 1 ? SetIndex(images.product.length) : SetIndex(i - 1));
	}
	
	return (
		<div className="product">
		<div className="product-images">
			<GrFormPrevious className='prev' onClick={() => nextOrPrev('prev')}/>
			{images.product.map((image) =>{
				const {id, src} = image;
				return (
					<div  key={id}>
						<img src={src} alt="" className={`${index === id? 'single-image show-single-img' :'single-image'}`}
						onClick={openLightbox}/>
					</div>
				)
			})}
			<GrFormNext className='next' onClick={() =>nextOrPrev('next')}/>
		</div>
		<div className="product-thumb">
			{images.thumb.map((thumb)=>{
				const {id, src} = thumb;
				return(
					<img key={id} src={src} alt="thumb" className='thumb' onClick={() =>setTumb(id)}/>
				)
			})}
		</div>
		</div>
	)
}

export default ProductImages;
