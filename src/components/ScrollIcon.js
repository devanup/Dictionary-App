import React, { useState, useEffect } from 'react';

export const ScrollIcon = () => {
	const [showScrollIcon, setShowScrollIcon] = useState(false);

	// Function to handle scrolling and show/hide the ScrollIcon
	const handleScroll = () => {
		if (window.scrollY > 300) {
			setShowScrollIcon(true);
		} else {
			setShowScrollIcon(false);
		}
	};

	// Function to handle smooth scrolling to the top
	const handleScrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	// Add a scroll event listener when the component mounts
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		// Remove the scroll event listener when the component unmounts
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div
			className={`scroll-icon w-11 h-11 bg-primaryPurple  hover:bg-opacity-75 fixed rounded-full right-16 bottom-16 flex cursor-pointer ${
				showScrollIcon ? 'visible' : 'invisible'
			} transition-all duration-300`}
			onClick={handleScrollToTop}
		>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 24 24'
				id='top-alignment'
				className='w-7 h-7 m-auto'
			>
				<path
					className=' fill-white'
					d='M12.71,6.29a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-4,4a1,1,0,1,0,1.42,1.42L11,9.41V21a1,1,0,0,0,2,0V9.41l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42ZM19,2H5A1,1,0,0,0,5,4H19a1,1,0,0,0,0-2Z'
				></path>
			</svg>
		</div>
	);
};
