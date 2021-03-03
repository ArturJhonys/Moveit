import { useContext } from 'react'
import styles from '../styles/components/ChallengeBox.module.css'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { CountDownContext } from '../contexts/CountDownContext'

export function ChallengeBox() {

    const {activeChallenge,resetChallenge, completeChallenge} = useContext(ChallengesContext)
    const {resetCountDown, } = useContext(CountDownContext)

    function handleChallegeSucceeded(){
        completeChallenge()
        resetCountDown()
    }

    function handleChallegeFailed(){
        resetChallenge()
        resetCountDown()
    }


    return (
        <div className={styles.ChallengeBoxContainer}>

            { activeChallenge ? (
                <div className={styles.challendActive}>
                    <header>Ganhe ${activeChallenge.amount} xp</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`}/>

                        <strong>Novo Desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button
                            type="button"
                            className={styles.challengeFailedButton}
                            onClick={handleChallegeFailed}
                        >
                            Falhei
                            
                        </button>
                        <button
                            type="button"
                            className={styles.challengeSucceededButton}
                            onClick={handleChallegeSucceeded}
                        >
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                    <div className={styles.ChallengeBoxNotActive}>
                        <strong>Finalize um ciclo para receber um desafio</strong>

                        <p>
                            <img src="icons/level-up.svg" alt="Level up" />

                    Avance de Level completando Desafios
                </p>

                    </div>
                )
            }


        </div >
    )
}