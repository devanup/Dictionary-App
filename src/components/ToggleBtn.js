import React from 'react';

const ToggleBtn = ({ active, onClick }) => {
	return (
		<div
			className={`toggle-btn cursor-pointer w-10 h-5 rounded-full ${
				active ? 'bg-primaryPurple' : 'bg-darkModeToggleNormal'
			} relative hover:bg-primaryPurple
			`}
			onClick={onClick}
		>
			<div
				className={`absolute w-3.5 h-3.5 rounded-full bg-white transform transition-transform ${
					active ? 'translate-x-5' : ''
				}`}
				style={{ top: '3px', left: '3px' }}
			></div>
		</div>
	);
};

export default ToggleBtn;
