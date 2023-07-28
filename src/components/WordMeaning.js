import React from 'react';
import './../styles/WordMeaning.css';

import { ReactComponent as NewWindow } from '../assets/images/icon-new-window.svg';
export const WordMeaning = ({ WordMeaningData }) => {
	// Extract the meanings data from WordMeaningData prop
	const wordDataMeaning = WordMeaningData[0].meanings;

	return (
		<div className='word-meaning-wrap mb-10'>
			{wordDataMeaning.map((meaning, index) => (
				<div className='word-meaning mb-10' key={index}>
					<div className='part-of-speech mb-8 flex'>
						{/* Display the part of speech for the current meaning */}
						<h3 className='text-2xl italic font-bold'>
							{meaning.partOfSpeech}
						</h3>
						<span className='pos-border inline-block flex-grow relative'></span>
					</div>

					{/* Display the "Meaning" section */}
					<h5 className='meaning mb-5 text-xl text-darkModeToggleNormal'>
						Meaning
					</h5>

					{/* Iterate through each definition and render them */}
					<ul className='meaning-list mb-8'>
						{meaning.definitions.map((definition, index) => (
							<li key={index} className='mb-2'>
								{/* Display the definition */}
								{definition.definition}
								{/* Display the example (if available) */}
								{definition.example && (
									<p className='example mt-2 mb-2 text-darkModeToggleNormal'>
										"{definition.example}"
									</p>
								)}
							</li>
						))}
					</ul>

					{/* Display the "Synonyms" section if synonyms are available */}
					{meaning.synonyms.length > 0 && (
						<h5 className='synonyms text-lg text-darkModeToggleNormal'>
							Synonyms
							{/* Join the synonyms with commas and display them */}
							<span className='font-bold ml-8'>
								{meaning.synonyms.join(', ')}
							</span>
						</h5>
					)}
				</div>
			))}

			{/* Display the horizontal separator */}
			<div className='hz-separator border-b mb-8'></div>

			{/* Display the source link */}
			<p className='source'>
				<span className='label mr-8 border-b text-darkModeToggleNormal border-b-darkModeToggleNormal'>
					Source
				</span>
				<a
					href='https://en.wiktionary.org/wiki/happy'
					target='_blank'
					rel='noreferrer'
					className='underline inline-block'
				>
					https://en.wiktionary.org/wiki/happy
					<NewWindow className='inline-block ml-5' />
				</a>
			</p>
		</div>
	);
};
