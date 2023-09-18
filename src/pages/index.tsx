import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Card, CardContent, CardActions, Button } from '@mui/material'
import UserCard from '../components/usercard'
import { CardProps } from '../components/usercard'
import { JSX, useEffect } from 'react'

const testArray: any = [];

const addCard = ({name, projectlink, resumelink}: CardProps) => {
}

const Home: NextPage = () => {

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
      </div>
    </div>
  )
}

export default Home
