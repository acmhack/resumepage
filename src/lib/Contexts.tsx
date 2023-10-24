import { createContext } from 'react';

export const CardSearchContext = createContext({
    sort: '',
    search: '',
    view: '',
    gradyear: [''],
    category: ['']
});