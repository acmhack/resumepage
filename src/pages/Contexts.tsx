import { createContext } from 'react';

export const CardSearchContext = createContext({
    sort: '',
    search: '',
    gradyear: [0],
    category: ['']
});