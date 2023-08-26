import styles from './footer.module.css'
import icon1 from '../../assets/images/Footer/icon1.svg'
import icon2 from '../../assets/images/Footer/icon2.svg'
import icon3 from '../../assets/images/Footer/icon3.svg'
import icon4 from '../../assets/images/Footer/icon4.svg'
import icon5 from '../../assets/images/Footer/icon5.svg'


export const Footer = () => {
    return(
        <div className={styles.container}>
            <div className={styles.line}></div>
            <div className={styles.icons}>
                <img className={styles.icon} src={icon1} alt='icon' />
                <img className={styles.icon} src={icon2} alt='icon' />
                <img className={styles.icon} src={icon3} alt='icon' />
                <img className={styles.icon} src={icon4} alt='icon' />
                <img className={styles.icon} src={icon5} alt='icon' />
            </div>
        </div>
    )
}