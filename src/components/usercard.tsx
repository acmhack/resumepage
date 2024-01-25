import { Card, CardContent } from '@mui/material';
import { useMemo } from 'react';
import { IUserCard } from '../interfaces/UserCard';
import styles from '../styles/components/UserCard.module.css';

const UserCard = ({ name, resumeLink, projectLink, gradYear, category, featured, projectName }: IUserCard) => {
	const resumeURL = useMemo(() => {
		let url = resumeLink;

		if (url.startsWith('http://')) {
			url.replace('http://', 'https://');
		}
		if (!url.startsWith('https://')) {
			url = 'https://' + url;
		}

		return url;
	}, [resumeLink]);

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
					{/* <div>
						<p className={styles.title}>School</p>
						<p>{school}</p>
					</div> */}
					<div>
						<p className={styles.title}>Graduation</p>
						<p>{gradYear}</p>
					</div>
				</div>
				<div className={styles.buttonContainer}>
					<a target="_blank" rel="noreferrer noopener" href={resumeURL} className={styles.button}>
						RESUME
					</a>
					<div className={styles.divider}></div>
					<a target="_blank" rel="noreferrer noopener" href={projectLink} className={styles.button}>
						PROJECT
					</a>
				</div>
			</CardContent>
		</Card>
	);
};

export default UserCard;

