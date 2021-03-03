
import { useContext } from 'react'
import { CountDownContext } from '../contexts/CountDownContext'
import style from '../styles/Pages/CountDown.module.css'



export function CountDown() {

    
    const {minutes, secunds, hasFinished, isActive, resetCountDown, startCountDown} = useContext(CountDownContext)

    const [minuteLef, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secundLef, secundRight] = String(secunds).padStart(2, '0').split('')


    

    return (
        <div>
            <div className={style.CountDownContainer}>
                <div>
                    <span>{minuteLef}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secundLef}</span>
                    <span>{secundRight}</span>
                </div>
            </div>

            {
                //If sem o else, (If Then) 
                hasFinished ? (
                    <button
                        disabled
                        className={style.CountDownButton}
                    >

                        Ciclo Encerrado!

                    </button>
                ) : (
                    <>
                    {isActive ? (
                        <button
                            type="button"
                            className={`${style.CountDownButton} ${style.CountDownButtonActive}`}
                            onClick={resetCountDown}
                        >
        
                            Abandonar Ciclo
        
                        </button>
                    ) : (
                            <button
                                type="button"
                                className={style.CountDownButton}
                                onClick={startCountDown}
                            >
        
                                Iniciar um Ciclo
        
                            </button>
        
                        )}
                    </>
                )
            }

            




        </div>
    )
}