import React, { useState, useRef } from 'react';
import '../styles/Searchbar.css';
import { fetchWordData } from '../data/DictionaryApi';

export const SearchBar = ({ onFetchData }) => {
	// State to manage the search word input and whether it's empty or not
	const [searchWord, setSearchWord] = useState('');
	const [searchIsEmpty, setSearchIsEmpty] = useState(false);

	// Ref to access the search input element directly
	const searchInputRef = useRef(null);

	// Function to handle the search icon click
	const handleSearchIconClick = async () => {
		// Set focus on the search input field when search icon is clicked
		if (searchInputRef.current) {
			searchInputRef.current.focus();
		}
		// Check if the search word is empty or not
		if (searchWord.trim() === '') {
			setSearchIsEmpty(true);
		} else {
			setSearchIsEmpty(false);

			// Call the API function with the entered word to fetch data
			const data = await fetchWordData(searchWord);
			// Call the callback function to pass the fetched data to App.js
			onFetchData(data);
		}
	};

	// Function to handle input changes
	const handleInputChange = (event) => {
		setSearchWord(event.target.value); // Update the state with the input value
	};

	// Function to handle Enter key press in the search input field
	const handleInputKeyPress = (event) => {
		if (event.key === 'Enter') {
			handleSearchIconClick(); // Call the API function when Enter key is pressed
			// console.log('Word Data: ', wordData);
		}
	};

	return (
		<div className='searchbar searchbarDark mt-12 mb-12 cursor-text relative'>
			<label className='relative'>
				<input
					autoFocus
					ref={searchInputRef}
					type='text'
					placeholder='Search for any word...'
					value={searchWord} // Set the input value to the state variable
					onChange={handleInputChange} // Handle input changes
					onKeyDown={handleInputKeyPress} // Handle Enter key press
					className={`pt-4 pb-4 pl-6 pr-12 border border-transparent ${
						searchIsEmpty
							? 'focus:border-red-500'
							: 'focus:border-primaryPurple'
					} bg-searchFieldLightNormal w-full rounded-2xl placeholder:text-searchFieldLightFilled font-bold text-xl placeholder:opacity-60 focus:outline-none transition border-opacity-100 duration-300`}
				/>

				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='18'
					height='18'
					viewBox='0 0 18 18'
					className='absolute scale-110 right-5 top-1/2 -translate-y-1/2 cursor-pointer'
					onClick={handleSearchIconClick}
				>
					<path
						fill='none'
						stroke='#A445ED'
						stroke-linecap='round'
						stroke-linejoin='round'
						stroke-width='1.5'
						d='m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z'
					/>
				</svg>
				{/* Display the error message when search clicked but the field is empty */}
				{searchIsEmpty && (
					<span className='error-msg text-red-500 absolute block mt-2'>
						Whoops, can't be empty...
					</span>
				)}
			</label>
		</div>
	);
};
