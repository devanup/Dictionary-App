import React from 'react';
import { PhoneticSection } from './PhoneticSection';
import { WordMeaning } from '../WordMeaning';

export const ResultView = ({ data }) => {
	return (
		<div>
			{/* Render the PhoneticSection component and pass the data as props */}
			<PhoneticSection phoneticData={data} />
			{/* Render the WordMeaning component and pass the data as props */}
			<WordMeaning WordMeaningData={data} />
		</div>
	);
};
