import React from 'react';

export const ErrorView = () => {
	return (
		<div className='error-wrap text-center'>
			<h3 className='text-6xl mb-10'>😕</h3>
			<h5 className=' capitalize text-xl font-bold mb-5'>
				No definitions found
			</h5>
			<p className='text-lg text-darkModeToggleNormal'>
				Sorry pal, we couldn't find definitions for the word you were looking
				for.
				<br />
				You can try the search again at later time or head to the web instead.
			</p>
		</div>
	);
};
