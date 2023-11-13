import React from 'react';
import { Card, CardContent, CardActions, Button } from '@mui/material';
import { IUserCard } from '../interfaces/UserCard';
import styles from '../styles/components/UserCard.module.css';

const UserCard = ({ name, resumelink, projectlink, gradyear, category, featured }: IUserCard) => {
	return (
		<Card style={{ width: 250, height: 350, backgroundColor: '#1C1C1C', display: 'flex', flexDirection: 'column', borderRadius: '1em' }}>
			<CardContent style={{ padding: '1em 0' }}>
				<h2 className={styles.name}>{name}</h2>
				<br /> {/* diagnostic */}
				<div className={styles.line}></div>
				<div className={styles.contentContainer}>
					<p>Grad Year: {gradyear}</p>
					<p>Category: {category}</p>
					<p>Featured: {featured.toString()}</p>
				</div>
			</CardContent>
			<CardActions disableSpacing style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-evenly', padding: 0 }}>
				<a href={resumelink} className={styles.button}>
					RESUME
				</a>
                <div className={styles.divider}></div>
				<a href={projectlink} className={styles.button}>
					PROJECT
				</a>
			</CardActions>
		</Card>
	);
};

export default UserCard;
