import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Card, CardContent, CardActions, Button } from '@mui/material'
import UserCard from '../components/usercard'
import { JSX, useEffect } from 'react'


const testArray: any = [];

const addCard = ({name, projectlink, resumelink}: any) => {
  for (let index = 0; index < 5; index++) {
    testArray.push()
  }
}

const Home: NextPage = () => {


  return (
    <div style={{height: '100%'}}>
      <h1>PICKHACKS RESUME PAGE!! :)</h1>
      <div id='top' style={{display: 'flex', gap: 40, flexFlow: 'wrap', height: '80vh', width: '90vw', padding: 100, overflow: 'scroll', alignContent: 'flex-start', borderStyle: 'solid'}}>
        <UserCard name='gamer' projectlink='null' resumelink='null' />
        <UserCard name='gamer' projectlink='null' resumelink='null' />
        <UserCard name='gamer' projectlink='null' resumelink='null' />
        <UserCard name='gamer' projectlink='null' resumelink='null' />
        <UserCard name='gamer' projectlink='null' resumelink='null' />
        <UserCard name='gamer' projectlink='null' resumelink='null' />
        <UserCard name='gamer' projectlink='null' resumelink='null' />
        <UserCard name='gamer' projectlink='null' resumelink='null' />
        <UserCard name='gamer' projectlink='null' resumelink='null' />
        <UserCard name='gamer' projectlink='null' resumelink='null' />
        <UserCard name='gamer' projectlink='null' resumelink='null' />
        <UserCard name='gamer' projectlink='null' resumelink='null' />
        <UserCard name='gamer' projectlink='null' resumelink='null' />
        <UserCard name='gamer' projectlink='null' resumelink='null' />
        <UserCard name='gamer' projectlink='null' resumelink='null' />
        <UserCard name='gamer' projectlink='null' resumelink='null' />
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
