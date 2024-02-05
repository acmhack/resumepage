import React from 'react';
import { Card, CardContent, CardActions, Button } from '@mui/material';
import { IUserCard } from '../interfaces/UserCard';
import styles from '../styles/components/UserCard.module.css';

const UserCard = ({ name, resumelink, projectlink, grad, category, featured, projectName, school }: IUserCard) => {
	return (
		<Card style={{ width: 250, height: 350, backgroundColor: '#1C1C1C', borderRadius: '1em' }}>
			<CardContent style={{ padding: 0, display: 'flex', flexDirection: 'column', height: '100%' }}>
				<h2 className={styles.name}>{name}</h2>
				<div className={styles.line}></div>
				<div className={styles.contentContainer}>
					<div>
						<p className={styles.title}>Project</p>
						<p>{projectName}</p>
					</div>
					<div>
						<p className={styles.title}>Categories</p>
						<p>{category}</p>
					</div>
					<div>
						<p className={styles.title}>School</p>
						<p>{school}</p>
					</div>
					<div>
						<p className={styles.title}>Graduation</p>
						<p>{grad}</p>
					</div>
				</div>
				<div className={styles.buttonContainer}>
					<a href={resumelink} target="_blank" className={styles.button}>
						Resume
					</a>
					<div className={styles.divider}></div>
					<a href={projectlink} target="_blank" className={styles.button}>
						Project
					</a>
				</div>
			</CardContent>
		</Card>
	);
};

export default UserCard;
