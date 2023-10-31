import styles from '../styles/components/Layout.module.css';
import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { FormControl, FormControlLabel, FormGroup, InputLabel, Select, MenuItem, Checkbox, TextField, Button, Radio, RadioGroup } from '@mui/material';
import { useState } from 'react';
import { CardSearchContext } from '../lib/Contexts';
import Sidebar from './Sidebar';
import Searchbar from './Searchbar';
import ViewSwitch from './ViewSwitch';

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [sort, setSort] = useState('');
    const [search, setSearch] = useState('');
    const [view, setView] = useState('people');
    const [gradyear, setGradYear] = useState<string[]>([]);
    const [category, setCategory] = useState<string[]>([]);

    return (
        <CardSearchContext.Provider value={{ sort: sort, search: search, view: view, gradyear: gradyear, category: category }}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <Searchbar search={search} setSearch={setSearch} />
                    <ViewSwitch setView={setView}/>
                </div>
                <div className={styles.row}>
                    <Sidebar
                        view={view}
                        sort={sort}
                        gradyear={gradyear}
                        category={category}
                        setGradYear={setGradYear}
                        setCategory={setCategory}
                        setSort={setSort}
                    />
                    {children}
                </div>
            </div>
        </CardSearchContext.Provider>
    );
};
export default Layout;
