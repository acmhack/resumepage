import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Card, CardContent, CardActions, Button } from '@mui/material'
import UserCard from '../components/usercard'
import { CardProps } from '../components/usercard'
import { JSX, useEffect, useContext } from 'react'
import { CardSearchContext } from './Contexts'

const testArray: CardProps[] = [
  {
    name: 'test',
    projectlink: 'test',
    resumelink: 'test'
  },
  {
    name: 'anotherTest',
    projectlink: 'cool',
    resumelink: 'muypoggers'
  },
  {
    name: 'zaTest',
    projectlink: 'coolio',
    resumelink: 'muchopoggers'
  }
];

const addCard = ({name, projectlink, resumelink}: CardProps) => {
}

const displayCards = (cards : CardProps[]) => {
  return  <>
            {cards.map((card) => <UserCard name={card.name} projectlink={card.projectlink} resumelink={card.resumelink}></UserCard>)}
          </>;
}

const Home: NextPage = () => {
  const searchFilter = useContext(CardSearchContext);

  return (
    <div style={{height: '100%'}}>
      <div className={styles.cardContainer}>
        <UserCard name='gamer' projectlink='null' resumelink='null' />
        <UserCard name='gamer' projectlink='null' resumelink='null' />
        <UserCard name='gamer' projectlink='null' resumelink='null' />
        <UserCard name='gamer' projectlink='null' resumelink='null' />
        <UserCard name='gamer' projectlink='null' resumelink='null' />
        <UserCard name='gamer' projectlink='null' resumelink='null' />
        <UserCard name='gamer' projectlink='null' resumelink='null' />
        {displayCards(testArray)}

        <UserCard name='fortnite' projectlink={searchFilter} resumelink='gaming' />
        {testArray.filter(card => card.name.includes(searchFilter)).map(filteredCard => (
          <UserCard name={filteredCard.name} projectlink={filteredCard.projectlink} resumelink={filteredCard.resumelink}></UserCard>
        ))}
      </div>
    </div>
  )
}

export default Home
