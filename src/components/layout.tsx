import styles from '../styles/components/Layout.module.css';
import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { FormControl, FormControlLabel, FormGroup, InputLabel, Select, MenuItem, Checkbox, TextField, Button, Radio, RadioGroup } from '@mui/material';
import { useState } from 'react';
import { CardSearchContext } from '../lib/Contexts';
import Sidebar from './Sidebar';
import Searchbar from './Searchbar';
import ViewSwitch from './ViewSwitch';
import Head from 'next/head';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Filter from './Filter';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
	const [sort, setSort] = useState('feat');
	const [search, setSearch] = useState('');
	const [view, setView] = useState('people');
	const [gradyear, setGradYear] = useState<string[]>([]);
	const [category, setCategory] = useState<string[]>([]);

	return (
		<ThemeProvider theme={darkTheme}>
			<Head>
				<title>PickHacks Resumes</title>
			</Head>
			<CardSearchContext.Provider value={{ sort: sort, search: search, view: view, gradyear: gradyear, category: category }}>
				<div className={styles.container}>
					<div className={styles.circle} style={{ right: 0, bottom: '-5%' }}></div>
					<div className={styles.circle} style={{ top: '-10%', left: '-10%' }}></div>
					<div className={styles.circle} style={{ left: '40%', top: '-30%' }}></div>
					<div className={styles.circle} style={{ left: '5%', bottom: '-40%' }}></div>
					<div className={styles.row}>
						<Sidebar view={view} gradyear={gradyear} category={category} setGradYear={setGradYear} setCategory={setCategory} />
                        <div className={styles.column}>
                        <div className={styles.row}>
							<Searchbar search={search} setSearch={setSearch} />
							<Filter sort={sort} setSort={setSort}></Filter>
							<ViewSwitch setView={setView} />
						</div>
						{children}
                        </div>
						
					</div>
				</div>
			</CardSearchContext.Provider>
		</ThemeProvider>
	);
};
export default Layout;
