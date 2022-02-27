import React from 'react'
import { useGlobalContext } from '../Context'
import {GrClose} from 'react-icons/gr'


function Sidebar() {
	const {
		isSidebarOpen, 
		closeSideBar, 
		closeLightbox,
	} = useGlobalContext();

	const handleOnclick = () => {
		closeSideBar();
		closeLightbox();
	}

	return (
	<div className={`${isSidebarOpen? 'side-lb show-side-lb' :'side-lb'}`}>
		<div className={`${isSidebarOpen? 'side show-side' :'side'}`}>
			<GrClose className="close" onClick={handleOnclick}/>
			<ul className="side-links">
				<li> Collections</li>
				<li> Men</li>
				<li> Women</li>
				<li> About</li>
			</ul> 
		</div>
	</div>
)
}

export default Sidebar