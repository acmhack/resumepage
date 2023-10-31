import styles from '../styles/components/Layout.module.css';
import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { FormControl, FormControlLabel, FormGroup, InputLabel, Select, MenuItem, Checkbox, TextField, Button, Radio, RadioGroup } from '@mui/material';
import { useState } from 'react';
import { CardSearchContext } from '../lib/Contexts';

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
	const [sort, setSort] = useState('');
	const [search, setSearch] = useState('');
	const [view, setView] = useState('people');

	return (
		<CardSearchContext.Provider
			value={{ sort: sort, search: search, view: view, gradyear: [2023, 2024, 2025, 2026], category: ['overall', 'beginner', 'solo'] }}
		>
			<div className={styles.container}>
				<div className={styles.sidebar}>
					<div className={styles.search}>
						<SearchIcon
							sx={{
								position: 'absolute',
								left: 18,
								zIndex: 99,
							}}
						/>
						<input
							type="text"
							className={styles.searchbar}
							placeholder="Search..."
							value={search}
							onChange={(e) => setSearch(e.currentTarget.value)}
						/>
						{/*<TextField id="search" type="search" label="Search..." variant="outlined" onKeyUp={setState(this.value)}/>*/}
					</div>
					<div className={styles.filter}>
						<p className={styles.title}>View As</p>
						<RadioGroup
							defaultValue="projects"
							onChange={(e) => {
								setView(e.target.value);
							}}
						>
							<FormControlLabel value="people" control={<Radio />} label="People" />
							<FormControlLabel value="projects" control={<Radio />} label="Projects" />
						</RadioGroup>
					</div>
					<div className={styles.line}></div>

					{/* TODO: Clear filters button */}
					{view === 'people' && (
						<>
							<div className={styles.filter}>
								<p className={styles.title}>Grad Year</p>
								<FormGroup>
									<FormControlLabel control={<Checkbox />} label="2023" />
									<FormControlLabel control={<Checkbox />} label="2024" />
									<FormControlLabel control={<Checkbox />} label="2025" />
									<FormControlLabel control={<Checkbox />} label="2026" />
								</FormGroup>
							</div>
							<div className={styles.line}></div>
						</>
					)}
					<div className={styles.filter}>
						<p className={styles.title}>Categories</p>
						<FormGroup>
							<FormControlLabel control={<Checkbox />} label="Overall" />
							<FormControlLabel control={<Checkbox />} label="Beginner" />
							<FormControlLabel control={<Checkbox />} label="Solo" />
						</FormGroup>
					</div>
					<div className={styles.line}></div>
					<div className={styles.filter}>
						<FormControl fullWidth>
							<InputLabel>Sort By</InputLabel>
							<Select value={sort} label="Sort By" onChange={(e) => setSort(e.target.value)}>
								<MenuItem value={'feat'}>Featured</MenuItem>
								<MenuItem value={'asc'}>Ascending</MenuItem>
								<MenuItem value={'desc'}>Descending</MenuItem>
							</Select>
						</FormControl>
					</div>
				</div>
				{children}
			</div>
		</CardSearchContext.Provider>
	);
};
export default Layout;
