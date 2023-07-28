import React from 'react';
import '../../styles/PhoneticSection.css';
import { ReactComponent as PronounceIcon } from '../../assets/images/icon-play.svg';
export const PhoneticSection = ({ phoneticData }) => {
	// Function to handle playing the audio
	const handlePlayAudio = () => {
		// Iterate through the phonetic data and play the first available audio
		for (const phonetic of phoneticData[0]?.phonetics || []) {
			const audioURL = phonetic?.audio;
			if (audioURL) {
				const audio = new Audio(audioURL);
				audio.play();
				break; // Stop the loop after playing the first available audio
			}
		}
	};

	return (
		<div className='word-phonetic-wrap mb-10'>
			<div className='word-and-phonetic'>
				{/* Display the word in large font size */}
				<h1 className='word text-6xl mb-4 font-bold'>
					{phoneticData[0]?.word}
				</h1>

				{/* Display the phonetic information in a smaller font size */}
				<p className='phonetic text-2xl text-primaryPurple '>
					{phoneticData && phoneticData[0].phonetic}
				</p>
				<div className='pronounce'>
					{/* Conditionally render the PronounceIcon only if there is at least one audioURL */}
					{phoneticData[0]?.phonetics.some((phonetic) => phonetic?.audio) && (
						<button className='pronounce-button' onClick={handlePlayAudio}>
							<PronounceIcon className='pronounce-icon' />
						</button>
					)}
				</div>
			</div>
		</div>
	);
};
