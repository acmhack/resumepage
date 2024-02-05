import React, { useState } from 'react';
import { Card, CardContent, CardActions, Button } from '@mui/material';
import { IProjectCard } from '../interfaces/ProjectCardProps';
import styles from '../styles/components/UserCard.module.css';
import MembersModal from './MembersModal';

const ProjectCard = ({ name, members, projectlink, category, featured }: IProjectCard) => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<MembersModal open={open} setOpen={setOpen} members={members}></MembersModal>
			<Card style={{ width: 250, height: 350, backgroundColor: '#1C1C1C', display: 'flex', flexDirection: 'column', borderRadius: '1em' }}>
				<CardContent style={{ padding: 0 }}>
					<h2 className={styles.name}>{name}</h2>
					<div className={styles.line}></div>
					<div className={styles.contentContainer}>
						<div>
							<p className={styles.title}>Categories</p>
							<p>{category}</p>
						</div>
						<div>
							<p className={styles.title}>Members</p>
							{members.map((member) => (
								<p key={member.name}>{member.name}</p>
							))}
						</div>
					</div>
				</CardContent>
				<CardActions disableSpacing style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-evenly', padding: 0 }}>
					<div className={styles.button} onClick={() => setOpen(true)}>
						Members
					</div>
					<div className={styles.divider}></div>
					<a href={projectlink} target="_blank" className={styles.button}>
						Project
					</a>
				</CardActions>
			</Card>
		</>
	);
};

export default ProjectCard;
