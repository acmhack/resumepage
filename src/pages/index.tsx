import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Card, CardContent, CardActions, Button } from '@mui/material'

const Home: NextPage = () => {
  return (
    <div>
      <h1>PICKHACKS RESUME PAGE!! :)</h1>
      <div style={{display: 'flex', gap: 10}}>
        <Card style={{width: 250}}>
          <CardContent>
            <h2>Name</h2>
          </CardContent>
          <CardActions disableSpacing>
            <Button size="small" color="primary">
              View Resume
            </Button>
            <Button size="small" color="secondary">
              View Project
            </Button>
          </CardActions>
        </Card>
        <Card style={{width: 250}}>
          <CardContent>
            <h2>Name2</h2>
          </CardContent>
          <CardActions disableSpacing>
            <Button size="small" color="primary">
              View Resume
            </Button>
            <Button size="small" color="secondary">
              View Project
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  )
}

export default Home
