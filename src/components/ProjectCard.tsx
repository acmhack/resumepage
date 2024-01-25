import { Card, CardActions, CardContent } from '@mui/material';
import { IProjectCard } from '../interfaces/ProjectCardProps';
import styles from '../styles/components/UserCard.module.css';

const ProjectCard = ({ name, members, projectlink, category, featured }: IProjectCard) => {
	return (
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
					{/* <p>Featured: {featured.toString()}</p> */}
				</div>
			</CardContent>
			<CardActions disableSpacing style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-evenly', padding: 0 }}>
				<a target="_blank" rel="noreferrer noopener" href={''} className={styles.button}>
					MEMBERS
				</a>
				<div className={styles.divider}></div>
				<a target="_blank" rel="noreferrer noopener" href={projectlink} className={styles.button}>
					PROJECT
				</a>
			</CardActions>
		</Card>
	);
};

export default ProjectCard;
