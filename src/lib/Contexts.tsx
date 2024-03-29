import { createContext } from 'react';
import { Dispatch, SetStateAction } from 'react';

export const CardSearchContext = createContext({
	sort: '',
	search: '',
	view: '',
	gradyear: [''],
	category: [''],
	setGradYear: (e: string[]) => {},
	setCategory: (e: string[]) => {},
});
