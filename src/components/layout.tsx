import React from 'react'
import styles from '../styles/components/Layout.module.css'

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <div className={styles.container}>
            {/* navbar */}
            {children}
        </div>
    );
}
 
export default Layout;