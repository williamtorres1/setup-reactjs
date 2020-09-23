import React from 'react'
import Head from 'next/head'

import RocketseatLogo from '../assets/rocketseat.svg'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>

      <Container>
        <RocketseatLogo />
        <h1>ReactJS Structure</h1>
        <p>
          A ReactJS + Next.js structure made by Rocketseat and William Torres.
        </p>
      </Container>
    </div>
  )
}

export default Home
