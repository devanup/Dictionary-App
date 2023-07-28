// src/data/DictionaryApi.js
import axios from 'axios';

const API_BASE_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en'; // Replace this with the actual API base URL

// Function to fetch word data from the API
export const fetchWordData = async (word) => {
	try {
		const response = await axios.get(`${API_BASE_URL}/${word}`);
		return response.data; // Return the response data (word data) from the API
	} catch (error) {
		console.error('Error fetching word data:', error);
		return null; // Return null in case of an error to handle it in the component
	}
};
