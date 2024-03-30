import styles from '../styles/components/Sidebar.module.css';
import * as React from 'react';
import { FormControl, FormControlLabel, FormGroup, InputLabel, Select, MenuItem, Checkbox, TextField, Button, Radio, RadioGroup } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { styled } from '@mui/material/styles';
import { ButtonProps } from '@mui/material/Button';
import { purple, pink } from '@mui/material/colors';
import { CardSearchContext } from '../lib/Contexts';

interface IProps {
	view: string;
}

const ClearButton = styled(Button)<ButtonProps>(({ theme }) => ({
	color: pink[200],
	borderColor: pink[200],
	width: 'fit-content',
	'&:hover': {
		borderColor: pink[300],
		backgroundColor: 'transparent',
		color: pink[300],
	},
}));

const Sidebar = ({ view }: IProps) => {
	const { gradyear, category, setGradYear, setCategory } = React.useContext(CardSearchContext);
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

	// const clearFilters = () => {
	// 	setGradYear([]);
	//     setCategory([]);
	// };

	return (
		<div className={styles.sidebar}>
			<div className={styles.logoContainer}>
				<img src="/logo.png" className={styles.logo}></img>
				<p className={styles.logoText}>
					PickHacks<br></br> Resumes
				</p>
			</div>
			<div className={styles.line}></div>
			{/* <div style={{ width: '100%', display: 'flex' }}>
				<p>Filter By</p>
				<ClearButton variant="outlined" endIcon={<ClearIcon />} onClick={clearFilters}>
					Clear filters
				</ClearButton>
			</div> */}
			{view === 'people' && (
				<>
					<div className={styles.filter}>
						<p className={styles.title}>Grad Year</p>
						<FormGroup id="gradyear">
							<FormControlLabel
								control={<Checkbox value={new Date().getFullYear().toString()} onChange={(e) => handleGradChange(e)} />}
								label={new Date().getFullYear().toString()}
							/>
							<FormControlLabel
								control={<Checkbox value={(new Date().getFullYear() + 1).toString()} onChange={(e) => handleGradChange(e)} />}
								label={(new Date().getFullYear() + 1).toString()}
							/>
							<FormControlLabel
								control={<Checkbox value={(new Date().getFullYear() + 2).toString()} onChange={(e) => handleGradChange(e)} />}
								label={(new Date().getFullYear() + 2).toString()}
							/>
							<FormControlLabel
								control={<Checkbox value={(new Date().getFullYear() + 3).toString()} onChange={(e) => handleGradChange(e)} />}
								label={(new Date().getFullYear() + 3).toString()}
							/>
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
					<FormControlLabel control={<Checkbox value="beginner" onChange={(e) => handleCategoryChange(e)} />} label="Hardware" />
					<FormControlLabel control={<Checkbox value="beginner" onChange={(e) => handleCategoryChange(e)} />} label="Women's" />
					<FormControlLabel control={<Checkbox value="beginner" onChange={(e) => handleCategoryChange(e)} />} label="Community Vote" />
					<FormControlLabel control={<Checkbox value="solo" onChange={(e) => handleCategoryChange(e)} />} label="Solo" />
				</FormGroup>
			</div>
			<div className={styles.line}></div>
		</div>
	);
};

export default Sidebar;
