import styles from './header.module.css'
import arrow from '../../assets/images/Header/arrow.svg'
import search from '../../assets/images/Header/search.svg'
import bottomArrow from '../../assets/images/Header/bottomArrow.svg'


export const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.searchPart}>
                <img className={styles.arrow} src={arrow} alt='arrow'/>
                <div className={styles.inputWrapper}>
                    <input className={styles.input} type='text' placeholder='Rolling in the deep'/>
                    <img className={styles.searchIcon} src={search} alt='serach'/>
                </div>
                <div className={styles.newTrack}>
                    <p>Новые треки</p>
                    <img className={styles.trackIcon} src={bottomArrow} alt='bottomArrow'/>
                </div>
            </div>
            <div className={styles.pagesPart}>
                <p className={styles.text}>Треки</p>
                <p className={styles.text}>Исполнители</p>
                <p className={styles.text}>Плейлисты</p>
            </div>
            <div className={styles.line}></div>
        </div>
    )
}