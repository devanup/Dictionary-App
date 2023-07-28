import { useEffect, useState } from 'react';
import '../src/styles/App.css';
import { Header } from './components/Header';
import { ResultView } from './components/ResultView/ResultView';
import { ScrollIcon } from './components/ScrollIcon';
import { SearchBar } from './components/SearchBar';
import { ErrorView } from './components/ResultView/ErrorView';

function App() {
	// State to store the fetched data and the fetch error status
	const [fetchedData, setFetchedData] = useState(null);
	const [fetchError, setFetchError] = useState(false);
	const isDarkMode =
		localStorage.getItem('DicApp_darkMode') === 'true' || false;

	// store the selected font set in local storage
	const selectedFont =
		localStorage.getItem('DicApp_selectedFont') || 'Sans Serif';

	// Function to handle data fetched from the API
	const handleFetchData = (data) => {
		if (data) {
			setFetchedData(data);
			setFetchError(false);
		} else {
			setFetchError(true);
		}
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

	// Apply the selected font class when the selected font changes
	useEffect(() => {
		document.body.classList = getCustomFontClass(selectedFont);
		// Save the selected font to local storage
		localStorage.setItem('DicApp_selectedFont', selectedFont);
	}, [selectedFont]);

	// Apply the dark mode class when the app loads or when the dark mode state changes
	useEffect(() => {
		if (isDarkMode) {
			document.body.classList.add('darkMode');
		} else {
			document.body.classList.remove('darkMode');
		}
		// Save the dark mode state to local storage
		localStorage.setItem('DicApp_darkMode', isDarkMode);
	}, [isDarkMode]);

	return (
		<div className={`App ${isDarkMode ? 'darkMode' : ''}`}>
			<div className='body-wrap relative'>
				<Header />
				<SearchBar onFetchData={handleFetchData} />
				{/* Conditional rendering based on fetchError */}
				{fetchError ? (
					<ErrorView />
				) : (
					<>
						{fetchedData && <ResultView data={fetchedData} />}
						{fetchedData && <ScrollIcon />}
					</>
				)}
			</div>
		</div>
	);
}

export default App;
