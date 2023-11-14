import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import UserCard from '../components/usercard';
import { useEffect, useContext } from 'react';
import { CardSearchContext } from '../lib/Contexts';
import { IProjectCard } from '../interfaces/ProjectCardProps';
import { IUserCard } from '../interfaces/UserCard';
import ProjectCard from '../components/ProjectCard';

const projectsArray: IProjectCard[] = [
    {
        name: 'Project1',
        members: [],
        projectlink: 'test',
        category: 'overall',
        featured: true
    },
    {
        name: 'Project2',
        members: [],
        projectlink: 'cool',
        category: 'beginner',
        featured: false
    },
    {
        name: 'Project3',
        members: [],
        projectlink: 'coolio',
        category: 'solo',
        featured: true
    }
];

const usersArray: IUserCard[] = [
    {
        name: 'test',
        projectlink: 'test',
        resumelink: 'test',
        grad: 'May 2023',
        category: 'overall',
        projectName: 'test',
        school: 'Missouri S&T',
        featured: true
    },
    {
        name: 'anotherTest',
        projectlink: 'cool',
        resumelink: 'muypoggers',
        grad: 'May 2024',
        category: 'beginner',
        projectName: 'test',
        school: 'Missouri S&T',
        featured: false
    },
    {
        name: 'zaTest',
        projectlink: 'coolio',
        resumelink: 'muchopoggers',
        grad: 'May 2025',
        category: 'solo',
        projectName: 'test',
        school: 'Missouri S&T',
        featured: true
    },
    {
        name: 'baby',
        projectlink: 'dont matter',
        resumelink: 'omegapoggers',
        grad: 'May 2026',
        category: 'overall',
        projectName: 'test',
        school: 'Missouri S&T',
        featured: false
    },
    {
        name: 'coolbaby',
        projectlink: 'do matter',
        resumelink: 'omega2poggers',
        grad: 'May 2023',
        category: 'beginner',
        projectName: 'test',
        school: 'Missouri S&T',
        featured: true
    },
    {
        name: 'John Smith Jr.',
        projectlink: 'generic project.git or whatever',
        resumelink: 'a link to a pdf of some sort',
        grad: 'May 2024',
        category: 'beginner',
        projectName: 'test',
        school: 'Missouri S&T',
        featured: false
    }
];

const displayCards = (userCards: IUserCard[], projectCards: IProjectCard[], searchFilter: any) => {
    //TODO add type to searchFilter
    if (searchFilter.view === 'people') {
        const search = searchFilter.search.toLowerCase();
        const gradyear = searchFilter.gradyear.toString();
        const category = searchFilter.category;
        const sort = searchFilter.sort;
        userCards = userCards.filter((card) => card.name.toLowerCase().includes(search));
        if (gradyear.length != 0) {
            userCards = userCards.filter((card) => card.grad.includes(gradyear));
        }
        if (category.length != 0) {
            userCards = userCards.filter((card) => category.includes(card.category));
        }
        switch (sort) {
            case 'asc':
                userCards = userCards.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'desc':
                userCards = userCards.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case 'feat':
                userCards = userCards.filter((card) => card.featured);
                break;
        }
    } else if (searchFilter.view === 'projects') {
        const search = searchFilter.search.toLowerCase();
        const category = searchFilter.category;
        const sort = searchFilter.sort;
        projectCards = projectCards.filter((card) => card.name.toLowerCase().includes(search));
        if (category.length != 0) {
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
                projectCards = projectCards.filter((card) => card.featured);
                break;
        }
    }

    return (
        <>
            {searchFilter.view === 'people' &&
                userCards.map((card, i) => (
                    <UserCard
                        key={i}
                        name={card.name}
                        projectlink={card.projectlink}
                        resumelink={card.resumelink}
                        featured={card.featured}
                        grad={card.grad}
                        category={card.category}
                        projectName={card.projectName}
                        school={card.school}
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
    const searchFilter = useContext(CardSearchContext);

    return (
        <div style={{ height: '100%' }}>
            <div className={styles.cardContainer}>{displayCards(usersArray, projectsArray, searchFilter)}</div>
        </div>
    );
};

export default Home;
