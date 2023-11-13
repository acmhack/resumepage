import { FormControl, FormControlLabel, FormGroup, InputLabel, Select, MenuItem, Checkbox, TextField, Button, Radio, RadioGroup } from '@mui/material';

interface IProps {
	sort: string;
	setSort: React.Dispatch<React.SetStateAction<string>>;
}

const Filter = ({ sort, setSort }: IProps) => {
	return (
		<FormControl sx={{ width: '20em' }} size='small'>
			<InputLabel>Sort By</InputLabel>
			<Select value={sort} label="Sort By" onChange={(e) => setSort(e.target.value)}>
				<MenuItem value={'feat'}>Featured</MenuItem>
				<MenuItem value={'asc'}>Ascending</MenuItem>
				<MenuItem value={'desc'}>Descending</MenuItem>
			</Select>
		</FormControl>
	);
};

export default Filter;
