import type { NextPage } from 'next';
import { useContext, useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import UserCard from '../components/usercard';
import { IProjectCard } from '../interfaces/ProjectCardProps';
import { CardSearchContext } from '../lib/Contexts';
import styles from '../styles/Home.module.css';
import MembersModal from '../components/MembersModal';

const displayCards = (userCards: User[], projectCards: IProjectCard[], searchFilter: any) => {
	//TODO add type to searchFilter
	if (searchFilter.view === 'people') {
		const search = searchFilter.search.toLowerCase();
		const gradyear = searchFilter.gradyear.toString();
		const category = searchFilter.category;
		const sort = searchFilter.sort;
		userCards = userCards.filter((card) => `${card.firstName} ${card.lastName}`.toLowerCase().includes(search));
		if (gradyear.length !== 0) {
			userCards = userCards.filter((card) => card.graduationYear === gradyear);
		}
		if (category.length !== 0) {
			userCards = userCards.filter((card) => category.includes(card.category));
		}
		switch (sort) {
			case 'asc':
				userCards = userCards.sort((a, b) => `${a.firstName} ${a.lastName}`.localeCompare(`${b.firstName} ${b.lastName}`));
				break;
			case 'desc':
				userCards = userCards.sort((a, b) => `${b.firstName} ${b.lastName}`.localeCompare(`${a.firstName} ${a.lastName}`));
				break;
			case 'feat':
				userCards = userCards.sort((a, b) => {
					if (a.featured && b.featured) {
						if (a.firstName < b.firstName) {
							return -1;
						}
						if (a.firstName > b.firstName) {
							return 1;
						}
						return 0;
					} else if (b.featured) {
						return 1;
					}
					return -1;
				});
				break;
		}
		console.log(userCards);
	} else if (searchFilter.view === 'projects') {
		const search = searchFilter.search.toLowerCase();
		const category = searchFilter.category;
		const sort = searchFilter.sort;
		projectCards = projectCards.filter((card) => card.projectName.toLowerCase().includes(search));
		if (category.length !== 0) {
			projectCards = projectCards.filter((card) => category.includes(card.category));
		}
		switch (sort) {
			case 'asc':
				projectCards = projectCards.sort((a, b) => a.projectName.localeCompare(b.projectName));
				break;
			case 'desc':
				projectCards = projectCards.sort((a, b) => b.projectName.localeCompare(a.projectName));
				break;
			case 'feat':
				projectCards = projectCards.sort((a, b) => {
					if (a.featured && b.featured) {
						if (a.projectName < b.projectName) {
							return -1;
						}
						if (a.projectName > b.projectName) {
							return 1;
						}
						return 0;
					} else if (b.featured) {
						return 1;
					}
					return -1;
				});
				break;
		}
	}

	return (
		<>
			{searchFilter.view === 'people' &&
				userCards.map((card, i) => (
					<UserCard
						key={i}
						firstName={card.firstName}
						lastName={card.lastName}
						projectLink={card.projectLink}
						resume={card.resume}
						featured={card.featured}
						graduationYear={card.graduationYear}
						graduationMonth={card.graduationMonth}
						school={card.school}
						category={card.category}
						projectName={card.projectName}
					></UserCard>
				))}
			{searchFilter.view === 'projects' &&
				projectCards.map((card, i) => (
					<ProjectCard
						key={i}
						projectName={card.projectName}
						members={card.members}
						projectLink={card.projectLink}
						featured={card.featured}
						category={card.category}
					></ProjectCard>
				))}
		</>
	);
};

const Home: NextPage = () => {
	const [users, setUsers] = useState([]);
	const [projects, setProjects] = useState([]);
	const searchFilter = useContext(CardSearchContext);

	useEffect(() => {
		fetch('/api/resumes')
			.then((res) => res.json())
			.then((data) => setUsers(data));
		fetch('/api/projects')
			.then((res) => res.json())
			.then((data) => setProjects(data));
	}, []);

	return (
		<div style={{ height: '100%' }}>
			<div className={styles.cardContainer}>{displayCards(users, projects, searchFilter)}</div>
		</div>
	);
};

export default Home;
