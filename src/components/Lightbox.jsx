import React,{useState, useEffect} from 'react'
import { useGlobalContext } from '../Context'
import images from "../images";
import {GrFormNext} from 'react-icons/gr'
import {GrFormPrevious} from 'react-icons/gr'
import {GrClose} from 'react-icons/gr'


const Lightbox = () => {
	const {isLightboxOpen, SetIsLightboxOpen} = useGlobalContext();
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

	useEffect ( () =>{
		document.addEventListener('click', handleClosing )
	}, []);

	const handleClosing = (e) => {
		let el = e.target.classList.value;
		console.log(el);
		if (el === 'product-preview' || el === 'lb-close')
			SetIsLightboxOpen(false);
	}


	return (
	<div className={`${isLightboxOpen? 'lightbox show-lightbox':'lightbox'}`}>
		<div className='product-preview'>
			<div className="lb-container">
				<GrClose className='lb-close'/>
				<GrFormPrevious className='lb-prev' onClick={() => nextOrPrev('prev')}/>
					{images.product.map((image) =>{
						const {id, src} = image;
						return (
							<div  key={id}>
								<img src={src} alt="" className={`${index === id? 'lb-single-image show-single-img' :'single-image'}`}/>
							</div>
						)
					})}
					<GrFormNext className='lb-next' onClick={() =>nextOrPrev('next')}/>
				<div className="lb-product-thumb">
					{images.thumb.map((thumb)=>{
						const {id, src} = thumb;
						return(
							<img key={id} src={src} alt="thumb" className='lb-thumb' onClick={() =>setTumb(id)}/>
						)
					})}
				</div>
			</div>
		</div>
	</div>
	)
}

export default Lightbox