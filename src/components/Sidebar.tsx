import styles from '../styles/components/Sidebar.module.css';
import * as React from 'react';
import { FormControl, FormControlLabel, FormGroup, InputLabel, Select, MenuItem, Checkbox, TextField, Button, Radio, RadioGroup } from '@mui/material';

interface IProps {
	view: string;
	gradyear: string[];
	category: string[];
	setGradYear: React.Dispatch<React.SetStateAction<string[]>>;
	setCategory: React.Dispatch<React.SetStateAction<string[]>>;
}

const Sidebar = ({ view, gradyear, category, setGradYear, setCategory }: IProps) => {
	const handleGradChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const index = gradyear.indexOf(e.target.value);
		if (index === -1) {
			setGradYear([...gradyear, e.target.value]);
		} else {
			setGradYear(gradyear.filter((year) => year !== e.target.value));
		}
	};

	const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const index = category.indexOf(e.target.value);
		if (index === -1) {
			setCategory([...category, e.target.value]);
		} else {
			setCategory(category.filter((category) => category !== e.target.value));
		}
	};

	return (
		<div className={styles.sidebar}>
			<div className={styles.logoContainer}>
				<img src="/logo.png" className={styles.logo}></img>
				<p className={styles.logoText}>
					PickHacks<br></br> Resumes
				</p>
			</div>
			<div className={styles.line}></div>
			{/* TODO: Clear filters button */}
			{view === 'people' && (
				<>
					<div className={styles.filter}>
						<p className={styles.title}>Grad Year</p>
						<FormGroup id="gradyear">
							<FormControlLabel control={<Checkbox value="2023" onChange={(e) => handleGradChange(e)} />} label="2023" />
							<FormControlLabel control={<Checkbox value="2024" onChange={(e) => handleGradChange(e)} />} label="2024" />
							<FormControlLabel control={<Checkbox value="2025" onChange={(e) => handleGradChange(e)} />} label="2025" />
							<FormControlLabel control={<Checkbox value="2026" onChange={(e) => handleGradChange(e)} />} label="2026" />
						</FormGroup>
					</div>
					<div className={styles.line}></div>
				</>
			)}
			<div className={styles.filter}>
				<p className={styles.title}>Categories</p>
				<FormGroup id="category">
					<FormControlLabel control={<Checkbox value="overall" onChange={(e) => handleCategoryChange(e)} />} label="Overall" />
					<FormControlLabel control={<Checkbox value="beginner" onChange={(e) => handleCategoryChange(e)} />} label="Beginner" />
					<FormControlLabel control={<Checkbox value="solo" onChange={(e) => handleCategoryChange(e)} />} label="Solo" />
				</FormGroup>
			</div>
			<div className={styles.line}></div>
		</div>
	);
};

export default Sidebar;
