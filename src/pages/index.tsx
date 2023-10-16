import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Card, CardContent, CardActions, Button } from '@mui/material'
import UserCard from '../components/usercard'
import { CardProps } from '../components/usercard'
import { JSX, useEffect, useContext } from 'react'
import { CardSearchContext } from './Contexts'
import { test } from 'node:test'

const testArray: CardProps[] = [
  {
    name: 'test',
    projectlink: 'test',
    resumelink: 'test',
    gradyear: 2023,
    category: 'overall',
    featured: true
  },
  {
    name: 'anotherTest',
    projectlink: 'cool',
    resumelink: 'muypoggers',
    gradyear: 2024,
    category: 'beginner',
    featured: false
  },
  {
    name: 'zaTest',
    projectlink: 'coolio',
    resumelink: 'muchopoggers',
    gradyear: 2025,
    category: 'solo',
    featured: true
  },
  {
    name: 'baby',
    projectlink: 'dont matter',
    resumelink: 'omegapoggers',
    gradyear: 2026,
    category: 'overall',
    featured: false
  },
  {
    name: 'coolbaby',
    projectlink: 'do matter',
    resumelink: 'omega2poggers',
    gradyear: 2023,
    category: 'beginner',
    featured: true
  },
  {
    name: 'John Smith Jr.',
    projectlink: 'generic project.git or whatever',
    resumelink: 'a link to a pdf of some sort',
    gradyear: 2024,
    category: 'beginner',
    featured: false
  }
];

const displayCards = (cards : CardProps[], searchFilter: any) => { //TODO add type to searchFilter
  const search = searchFilter.search;
  const gradyear = searchFilter.gradyear;
  const category = searchFilter.category;
  const sort = searchFilter.sort;
  cards = cards.filter(card => card.name.toLowerCase().includes(search.toLowerCase()))
  if (gradyear.length != 0 && gradyear[0] != 0) { //currently [0] is default, WIP remove gradyear[0] check by setting [] as default
    cards = cards.filter(card => gradyear.includes(card.gradyear));
  }
  if (category.length != 0 && category[0] != '') {
    cards = cards.filter(card => category.includes(card.category));
  }
  switch (sort) {
    case 'asc':
      cards = cards.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'desc':
      cards = cards.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case 'feat':
      cards = cards.filter(card => card.featured);
      break;
  }

  return  <>
            {cards.map((card) => <UserCard name={card.name}
                                           projectlink={card.projectlink}
                                           resumelink={card.resumelink}
                                           featured={card.featured}
                                           gradyear={card.gradyear}
                                           category={card.category}></UserCard>)}
          </>;
}

const Home: NextPage = () => {
  const searchFilter = useContext(CardSearchContext);

  return (
    <div style={{height: '100%'}}>
      <div className={styles.cardContainer}>
        {displayCards(testArray, searchFilter)}
      </div>
    </div>
  )
}

export default Home
