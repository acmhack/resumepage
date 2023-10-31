import styles from '../styles/components/Searchbar.module.css';
import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';

interface IProps {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const Searchbar = ({ search, setSearch }: IProps) => {
    return (
        <div className={styles.search}>
            <SearchIcon
                sx={{
                    position: 'absolute',
                    left: 18,
                    zIndex: 99
                }}
            />
            <input type="text" className={styles.searchbar} placeholder="Search..." value={search} onChange={(e) => setSearch(e.currentTarget.value)} />
        </div>
    );
};

export default Searchbar;
