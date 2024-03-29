import type { NextPage } from 'next';
import { useContext, useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import UserCard from '../components/usercard';
import { IProjectCard } from '../interfaces/ProjectCardProps';
import { CardSearchContext } from '../lib/Contexts';
import styles from '../styles/Home.module.css';
import MembersModal from '../components/MembersModal';

const projectsArray: IProjectCard[] = [
	{
		name: 'Project1',
		members: [
			{
				firstName: 'test',
				lastName: 'testttt',
				projectLink: 'test',
				resume: 'https://cdn.filestackcontent.com/C2URI9BTSEuNqPznAk7I',
				graduationYear: '2023',
				graduationMonth: 'May',
				school: 'Missouri S&T',
				category: 'overall',
				projectName: 'test',
				featured: true,
			},
			{
				firstName: 'anotherTest',
				lastName: 'testt2131',
				projectLink: 'test',
				resume: 'https://cdn.filestackcontent.com/C2URI9BTSEuNqPznAk7I',
				graduationYear: '2023',
				graduationMonth: 'December',
				school: 'Mizzou',
				category: 'overall',
				projectName: 'test2',
				featured: true,
			},
		],
		projectlink: 'test',
		category: 'overall',
		featured: true,
	},
	{
		name: 'Project2',
		members: [],
		projectlink: 'cool',
		category: 'beginner',
		featured: false,
	},
	{
		name: 'Project3',
		members: [],
		projectlink: 'coolio',
		category: 'solo',
		featured: true,
	},
];

const displayCards = (userCards: User[], projectCards: IProjectCard[], searchFilter: any) => {
	console.log(userCards);
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
		projectCards = projectCards.filter((card) => card.name.toLowerCase().includes(search));
		if (category.length !== 0) {
			projectCards = projectCards.filter((card) => category.includes(card.category));
		}
		switch (sort) {
			case 'asc':
				projectCards = projectCards.sort((a, b) => a.name.localeCompare(b.name));
				break;
			case 'desc':
				projectCards = projectCards.sort((a, b) => b.name.localeCompare(a.name));
				break;
			case 'feat':
				projectCards = projectCards.sort((a, b) => {
					if (a.featured && b.featured) {
						if (a.name < b.name) {
							return -1;
						}
						if (a.name > b.name) {
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
						name={card.name}
						members={card.members}
						projectlink={card.projectlink}
						featured={card.featured}
						category={card.category}
					></ProjectCard>
				))}
		</>
	);
};

const Home: NextPage = () => {
	const [users, setUsers] = useState([]);
	const searchFilter = useContext(CardSearchContext);

	useEffect(() => {
		fetch('/api/resumes')
			.then((res) => res.json())
			.then((data) => setUsers(data));
	}, []);

	return (
		<div style={{ height: '100%' }}>
			<div className={styles.cardContainer}>{displayCards(users, projectsArray, searchFilter)}</div>
		</div>
	);
};

export default Home;
