import styles from '../styles/components/ViewSwitch.module.css';
import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { FormControl, FormControlLabel, FormGroup, InputLabel, Select, MenuItem, Checkbox, TextField, Button, Radio, RadioGroup } from '@mui/material';
import { useState } from 'react';
import { CardSearchContext } from '../lib/Contexts';

interface IProps {
	setView: React.Dispatch<React.SetStateAction<string>>;
}

const ViewSwitch = ({ setView }: IProps) => {
	const [checked, setChecked] = useState(false);

	return (
		<div>
			<div className={styles.btnContainer}>
				<i className={`${styles.fa} ${styles.faLeft}`} aria-hidden="true"></i>
				<label className={`${styles.switch} ${styles.colorModeSwitch}`}>
					<input
						type="checkbox"
						name="color_mode"
						id="color_mode"
						checked={checked}
						onChange={() => {
							setChecked(!checked);
							if (checked) {
								setView('people');
							} else {
								setView('projects');
							}
						}}
						style={{
							height: '100%',
						}}
					/>
					<label htmlFor="color_mode" data-on="Projects" data-off="People" className={styles.colorModeSwitchInner}></label>
				</label>
				<i className={`${styles.fa} ${styles.faRight}`} aria-hidden="true"></i>
			</div>
		</div>
	);
};

export default ViewSwitch;
