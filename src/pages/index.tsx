import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import UserCard from '../components/usercard';
import { useState, useEffect, useContext } from 'react';
import { Modal, Button } from '@mui/material';
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

const emptyUser = (): IUserCard => ({
    name: '',
    projectlink: '',
    resumelink: '',
    grad: '',
    category: '',
    projectName: '',
    school: '',
    featured: false
})

const tempstyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
}

const Home: NextPage = () => {
    const searchFilter = useContext(CardSearchContext);
    const [currentuser, setcurrentuser] = useState({user: emptyUser(), isOpen: false});

    const handleOpen = (card : IUserCard) => () => {
        setcurrentuser({user: card, isOpen: true});
    }
    const handleClose = () => {
        console.log('please')
        setcurrentuser({user: emptyUser(), isOpen: false});
    }

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
                        <div onClick={handleOpen(card)}>
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
                        </div>
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

    return (
        <div style={{ height: '100%' }}>
            <Modal
                                open={currentuser.isOpen} //test.isOpen && card.name === test.user.name
                                onClose={handleClose}
                                aria-labelledby='test'
                                aria-describedby='this is a test'>
                                <div style={tempstyle}>
                                <UserCard
                                    name={currentuser.user.name}
                                    projectlink={currentuser.user.projectlink}
                                    resumelink={currentuser.user.resumelink}
                                    featured={currentuser.user.featured}
                                    grad={currentuser.user.grad}
                                    category={currentuser.user.category}
                                    projectName={currentuser.user.projectName}
                                    school={currentuser.user.school}
                                ></UserCard>
                                <Button
                                    onClick={handleClose}>
                                    LEAVE
                                </Button>
                                </div>
                            </Modal>
            <div className={styles.cardContainer}>{displayCards(usersArray, projectsArray, searchFilter)}</div>
        </div>
    );
};

export default Home;
