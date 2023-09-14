import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Card, CardContent, CardActions, Button } from '@mui/material'
import UserCard from '../components/usercard'
import { CardProps } from '../components/usercard'
import { JSX, useEffect } from 'react'
import { test } from 'node:test'

const testArray: CardProps[] = [{name: 'bob', projectlink: 'projectlink', resumelink: 'resumelink1'},
                                {name: 'sandra', projectlink: 'fortnite', resumelink: 'jobby'},
                                {name: 'more', projectlink: 'ehhee', resumelink: 'danny'},];

const Test = (plz : CardProps[]) => {
  return  <>
            {plz.map((card) => <UserCard name={card.name} projectlink={card.projectlink} resumelink={card.resumelink}></UserCard>)}
          </>;
}

const Home: NextPage = () => {

  return (
    <div style={{height: '100%'}}>
      <h1>PICKHACKS RESUME PAGE!! :)</h1>
      <div id='top' style={{display: 'flex', gap: 40, flexFlow: 'wrap', height: '80vh', width: '90vw', padding: 40, overflow: 'scroll', alignContent: 'flex-start', borderStyle: 'solid'}}>
        <UserCard name='gamer' projectlink='null' resumelink='null' />
        {Test(testArray)}
      </div>
    </div>
  )
}

export default Home
