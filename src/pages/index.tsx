import Head from 'next/head'

import React from "react"
import { GetServerSideProps } from 'next'
import { ExpienceBar } from "../components/ExperienceBar"
import { Profile } from "../components/Profile"
import { CompletedChallenges } from "../components/CompletedChallenges"
import { CountDown } from "../components/CountDown"
import { ChallengeBox } from "../components/ChallengeBox"

import styles from '../styles/Pages/Home.module.css'
import { CountDownProvider } from '../contexts/CountDownContext'

export default function Home(props) {

  console.log(props)

  return (
    <div className={styles.container}>

      <Head>
        <title>Inicio | move.it</title>
      </Head>

      <ExpienceBar />

      <CountDownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <CountDown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountDownProvider>
    </div>
  )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies

  return {
    props: {
      level,
      currentExperience,
      challengesCompleted
    }
  }
}