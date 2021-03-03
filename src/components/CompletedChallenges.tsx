import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/Pages/CompletedChallenges.module.css'

export function CompletedChallenges() {

    const { challengesCompleted } = useContext(ChallengesContext)


    return (
        <div className={styles.compliteChallenges}>
            <span>Desafios Completos</span>
            <span>{challengesCompleted}</span>
        </div>
    )
}