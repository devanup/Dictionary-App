import { useState, useEffect } from 'react';
import ToggleBtn from './ToggleBtn';
import { ReactComponent as MoonIcon } from '../assets/images/icon-moon.svg';
import '../styles/ThemeToggler.css';

export const ThemeToggler = () => {
	// Function to get the theme preference from local storage
	const getThemePreference = () => {
		const themePreference = localStorage.getItem('DicApp_darkMode');
		return themePreference === 'true';
	};
	// State to track the dark mode status and moon icon active status
	const [isDarkMode, setIsDarkMode] = useState(getThemePreference);
	const [moonActive, setMoonActive] = useState(false);

	// Function to handle theme toggle
	const handleThemeToggle = () => {
		setIsDarkMode((prev) => !prev); // Toggle the dark mode state
		setMoonActive((prev) => !prev); // Toggle the moon icon active state
		document.body.classList.toggle('darkMode'); // Toggle the 'darkMode' class on the document body to apply dark mode styles
	};

	// Save the theme preference to local storage whenever it changes
	useEffect(() => {
		localStorage.setItem('DicApp_darkMode', isDarkMode.toString());
		document.body.classList.toggle('darkMode', isDarkMode); // Toggle the 'darkMode' class on the document body to apply dark mode styles
	}, [isDarkMode]);
	return (
		<div className='theme-toggler-wrap border-l-2 h-full flex items-center pl-7 cursor-pointer'>
			<span className='theme-toggler'>
				{/* Toggle button for dark mode */}
				<ToggleBtn active={isDarkMode} onClick={handleThemeToggle} />
			</span>
			<span className={`ml-6 cursor-pointer`} onClick={handleThemeToggle}>
				{/* Moon icon for indicating dark mode */}
				<MoonIcon
					className={`moon-icon ${moonActive ? 'moon-icon-active' : ''}`}
				/>
			</span>
		</div>
	);
};
