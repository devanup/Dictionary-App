import React from 'react';
import { FontSelector } from './FontSelector';
import { ThemeToggler } from './ThemeToggler';
import '../../src/styles/Header.css';

export const Header = () => {
	return (
		<div className='header h-14 flex items-center justify-between '>
			<a href='/'>
				<div className='logo '>
					<h1 className='title text-3xl font-bold '>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='34'
							height='38'
							viewBox='0 0 34 38'
						>
							<g
								fill='none'
								fill-rule='evenodd'
								stroke='#838383'
								stroke-linecap='round'
								stroke-width='1.5'
							>
								<path d='M1 33V5a4 4 0 0 1 4-4h26.8A1.2 1.2 0 0 1 33 2.2v26.228M5 29h28M5 37h28' />
								<path stroke-linejoin='round' d='M5 37a4 4 0 1 1 0-8' />
								<path d='M11 9h12' />
							</g>
						</svg>
					</h1>
				</div>
			</a>
			<div className='flex items-center space-x-4 relative h-14'>
				{/* Use the FontSelector component */}
				<FontSelector />

				{/* Separator */}
				{/* <div className='header-separator h-14 w-0.5 bg-slate-400 absolute inset-y-0 left-1/2 transform -translate-x-1/2'></div> */}
				{/* <div className='header-separator h-14 w-0.5 bg-slate-400 absolute left-1/2'></div> */}

				{/* Use the ThemeToggler component */}
				<ThemeToggler />
			</div>
		</div>
	);
};
