import styles from '../styles/components/Layout.module.css';
import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { FormControl, FormControlLabel, FormGroup, InputLabel, Select, MenuItem, Checkbox } from '@mui/material';
import { useState } from 'react';

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [sort, setSort] = useState('Featured');

    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <div className={styles.search}>
                    <SearchIcon
                        sx={{
                            position: 'absolute',
                            left: 18,
                            zIndex: 99
                        }}
                    />
                    <input type="text" className={styles.searchbar} placeholder="Search..." />
                </div>
                {/* TODO: Clear filters */}
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
                        <Select
                            value={sort}
                            label="Sort By"
                            onChange={(e) => setSort(e.target.value)}
                        >
                            <MenuItem value={'Featured'}>Featured</MenuItem>
                            <MenuItem value={'Ascending'}>Ascending</MenuItem>
                            <MenuItem value={'Descending'}>Descending</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
            {children}
        </div>
    );
};
export default Layout;
