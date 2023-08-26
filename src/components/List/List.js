import styles from './list.module.css'
import player from '../../assets/images/List/player.svg'
import star from '../../assets/images/List/star.svg'


export const List = () => {
    return (
        <div className={styles.container}>
           <div className={styles.wrapperList}>
               <div className={styles.song}>
                   <h2 className={styles.song}>Rolling in the deep</h2>
                   <p className={styles.singer}>Adele</p>
               </div>
               <div className={styles.icons}>
                   <img className={styles.icon} src={player} alt='player'/>
                   <img className={styles.icon} src={star} alt='star'/>
               </div>
           </div>
            <div className={styles.line}></div>


            <div className={styles.wrapperList}>
               <div className={styles.song}>
                   <h2 className={styles.song}>Rolling in the deep</h2>
                   <p className={styles.singer}>Adele</p>
               </div>
               <div className={styles.icons}>
                   <img className={styles.icon} src={player} alt='player'/>
                   <img className={styles.icon} src={star} alt='star'/>
               </div>
           </div>
            <div className={styles.line}></div><div className={styles.wrapperList}>
               <div className={styles.song}>
                   <h2 className={styles.song}>Rolling in the deep</h2>
                   <p className={styles.singer}>Adele</p>
               </div>
               <div className={styles.icons}>
                   <img className={styles.icon} src={player} alt='player'/>
                   <img className={styles.icon} src={star} alt='star'/>
               </div>
           </div><div className={styles.line}></div><div className={styles.wrapperList}>
               <div className={styles.song}>
                   <h2 className={styles.song}>Rolling in the deep</h2>
                   <p className={styles.singer}>Adele</p>
               </div>
               <div className={styles.icons}>
                   <img className={styles.icon} src={player} alt='player'/>
                   <img className={styles.icon} src={star} alt='star'/>
               </div>
           </div><div className={styles.line}></div><div className={styles.wrapperList}>
               <div className={styles.song}>
                   <h2 className={styles.song}>Rolling in the deep</h2>
                   <p className={styles.singer}>Adele</p>
               </div>
               <div className={styles.icons}>
                   <img className={styles.icon} src={player} alt='player'/>
                   <img className={styles.icon} src={star} alt='star'/>
               </div>
           </div><div className={styles.line}></div><div className={styles.wrapperList}>
               <div className={styles.song}>
                   <h2 className={styles.song}>Rolling in the deep</h2>
                   <p className={styles.singer}>Adele</p>
               </div>
               <div className={styles.icons}>
                   <img className={styles.icon} src={player} alt='player'/>
                   <img className={styles.icon} src={star} alt='star'/>
               </div>
           </div><div className={styles.line}></div><div className={styles.wrapperList}>
               <div className={styles.song}>
                   <h2 className={styles.song}>Rolling in the deep</h2>
                   <p className={styles.singer}>Adele</p>
               </div>
               <div className={styles.icons}>
                   <img className={styles.icon} src={player} alt='player'/>
                   <img className={styles.icon} src={star} alt='star'/>
               </div>
           </div><div className={styles.line}></div><div className={styles.wrapperList}>
               <div className={styles.song}>
                   <h2 className={styles.song}>Rolling in the deep</h2>
                   <p className={styles.singer}>Adele</p>
               </div>
               <div className={styles.icons}>
                   <img className={styles.icon} src={player} alt='player'/>
                   <img className={styles.icon} src={star} alt='star'/>
               </div>
           </div>
            <div className={styles.line}></div>
        </div>
    )
}