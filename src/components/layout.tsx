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
    const [gradyear, setGradYear] = useState<string[]>([]);
    const [category, setCategory] = useState<string[]>([]);

    const handleGradChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const index = gradyear.indexOf(e.target.value);
        if(index === -1) {
            setGradYear([...gradyear, e.target.value]);
        } else {
            setGradYear(gradyear.filter((year) => year !== e.target.value))
        }
    }

    const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const index = category.indexOf(e.target.value);
        if(index === -1) {
            setCategory([...category, e.target.value]);
        } else {
            setCategory(category.filter((category) => category !== e.target.value));
        }
    }

    return (
        <CardSearchContext.Provider
            value={{ sort: sort, search: search, view: view, gradyear: gradyear, category: category }}
        >
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
                                <FormGroup id='gradyear' >
                                    <FormControlLabel control={<Checkbox value="2023" onChange={(e) => handleGradChange(e)}/>} label="2023" />
                                    <FormControlLabel control={<Checkbox value="2024" onChange={(e) => handleGradChange(e)}/>} label="2024" />
                                    <FormControlLabel control={<Checkbox value="2025" onChange={(e) => handleGradChange(e)}/>} label="2025" />
                                    <FormControlLabel control={<Checkbox value="2026" onChange={(e) => handleGradChange(e)}/>} label="2026" />
                                </FormGroup>
                            </div>
                            <div className={styles.line}></div>
                        </>
                    )}
                    <div className={styles.filter}>
                        <p className={styles.title}>Categories</p>
                        <FormGroup id='category'>
                            <FormControlLabel control={<Checkbox value="overall" onChange={(e) => handleCategoryChange(e)}/>} label="Overall" />
                            <FormControlLabel control={<Checkbox value="beginner" onChange={(e) => handleCategoryChange(e)}/>} label="Beginner" />
                            <FormControlLabel control={<Checkbox value="solo" onChange={(e) => handleCategoryChange(e)}/>} label="Solo" />
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
