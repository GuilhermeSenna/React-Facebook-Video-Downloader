import videoImage from '../../assets/video_new.png'
import styles from './Result.module.css'

const Result = () => {
    return (
        <div className={styles.result}>
            <h1 className={styles.resultText}>Result found:</h1>

            <div className={styles.content}>
                <img src={videoImage}></img>
                <div className={styles.contentText}>
                    <h1>Title: <span className={styles.normalText}>Video 1</span></h1>
                    <h2>Description: <span className={styles.normalText}>A random facebook video.</span></h2>

                    <button>Download SD</button>
                    <button>Download HD</button>
                </div>
            </div>
        </div >
    )
}

export default Result;