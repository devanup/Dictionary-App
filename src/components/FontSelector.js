import '../../src/styles/FontSelector.css';
import { useState, useEffect, useRef } from 'react';

// Define font options
export const FontSelector = () => {
	const fontOptions = ['Sans Serif', 'Serif', 'Mono'];
	const fontSelectorRef = useRef(null);

	// Use state to manage visibility of font list
	const [showFontList, setShowFontList] = useState(false);
	// for styling the selected font
	const [selectedFont, setSelectedFont] = useState(
		localStorage.getItem('DicApp_selectedFont') || 'Sans Serif',
	);

	// Function to get the theme preference from local storage
	const getThemePreference = () => {
		const themePreference = localStorage.getItem('DicApp_darkMode');
		return themePreference === 'true';
	};
	// Track the dark mode status and moon icon active status
	const isDarkMode = getThemePreference();

	// Click event handler for FontSelector
	const handleFontSelectorClick = () => {
		setShowFontList(!showFontList);
	};

	// Click event handler for font options
	const handleFontOptionClick = (font) => {
		setSelectedFont(font);
		setShowFontList(false);
	};

	// Function to get the custom font class based on the selected font
	const getCustomFontClass = (font) => {
		switch (font) {
			case 'Sans Serif':
				return 'font-sansSerifCustom';
			case 'Serif':
				return 'font-serifCustom';
			case 'Mono':
				return 'font-monoCustom';
			default:
				return ''; // Return an empty string if no custom class matches
		}
	};

	const activeFontClass = getCustomFontClass(selectedFont);

	// Save the selected font to local storage when the state changes
	useEffect(() => {
		localStorage.setItem('DicApp_selectedFont', selectedFont);
		// Apply the selected font class to the body
		document.body.classList = getCustomFontClass(selectedFont);
		// Get the theme preference from local storage
		const themePreference = localStorage.getItem('DicApp_darkMode');
		themePreference === 'true' // Check if the theme preference is dark mode
			? document.body.classList.add('darkMode')
			: document.body.classList.remove('darkMode');
	}, [selectedFont, isDarkMode]);

	// Close the font list when clicking outside of the font selector
	useEffect(() => {
		const handleOutsideClick = (e) => {
			if (
				fontSelectorRef.current &&
				!fontSelectorRef.current.contains(e.target)
			) {
				setShowFontList(false);
			}
		};

		document.addEventListener('mousedown', handleOutsideClick);
		return () => {
			document.removeEventListener('mousedown', handleOutsideClick);
		};
	}, []);

	return (
		<div
			ref={fontSelectorRef}
			className='font-selector-wrap h-full mr-3 flex items-center cursor-pointer relative z-10 font-bold'
			onClick={handleFontSelectorClick}
		>
			{/* Use the active-font class to style the selected font */}
			<span className={`active-font ${activeFontClass}`}>{selectedFont}</span>
			<span className='arrow-icon ml-4' onClick={handleFontSelectorClick}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='14'
					height='8'
					viewBox='0 0 14 8'
				>
					<path
						fill='none'
						stroke='#A445ED'
						strokeWidth='1.5'
						d='m1 1 6 6 6-6'
					/>
				</svg>
			</span>
			{/* Show the font list when showFontList is true */}
			{/* set the active font color to text-primaryPurple*/}
			{showFontList && (
				<div className='font-list absolute'>
					{fontOptions.map((font, index) => (
						<div
							key={index}
							className={`font-option hover:text-primaryPurple  ${
								selectedFont === font ? 'text-primaryPurple' : ''
							} ${getCustomFontClass(font)}  `}
							onClick={() => handleFontOptionClick(font)}
						>
							{font}
						</div>
					))}
				</div>
			)}
		</div>
	);
};
