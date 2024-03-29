import { Card, CardContent } from '@mui/material';
import React, { useMemo } from 'react';
import styles from '../styles/components/UserCard.module.css';

const UserCard: React.FC<User> = ({ firstName, lastName, resume, projectLink, graduationYear, category, featured, projectName }) => {
	const resumeURL = useMemo(() => {
		let url = resume;

		if (url === null) return null;

		if (url.startsWith('http://')) {
			url.replace('http://', 'https://');
		}
		if (!url.startsWith('https://')) {
			url = 'https://' + url;
		}

		return url;
	}, [resume]);

	return (
		<Card style={{ width: 250, height: 350, backgroundColor: '#1C1C1C', borderRadius: '1em' }}>
			<CardContent style={{ padding: 0, display: 'flex', flexDirection: 'column', height: '100%' }}>
				<h2 className={styles.name}>
					{firstName} {lastName}
				</h2>
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
					{/* <div>
						<p className={styles.title}>School</p>
						<p>{school}</p>
					</div> */}
					<div>
						<p className={styles.title}>Graduation</p>
						<p>{graduationYear}</p>
					</div>
				</div>
				<div className={styles.buttonContainer}>
					<a
						target="_blank"
						rel="noreferrer noopener"
						href={resumeURL ?? '#'}
						className={styles.button + (resumeURL === null ? ' ' + styles.disabled : '')}>
						RESUME
					</a>
					<div className={styles.divider}></div>
					<a
						target="_blank"
						rel="noreferrer noopener"
						href={projectLink ?? '#'}
						className={styles.button + (projectLink === null ? ' ' + styles.disabled : '')}>
						PROJECT
					</a>
				</div>
			</CardContent>
		</Card>
	);
};

export default UserCard;

