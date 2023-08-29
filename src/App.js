import './css/style.css'
import styles from "./components/Header/header.module.css";
import arrow from "./assets/images/Header/arrow.svg";
import search from "./assets/images/Header/search.svg";
import bottomArrow from "./assets/images/Header/bottomArrow.svg";
import player from "./assets/images/List/player.svg";
import star from "./assets/images/List/star.svg";
import icon1 from "./assets/images/Footer/icon1.svg";
import icon2 from "./assets/images/Footer/icon2.svg";
import icon3 from "./assets/images/Footer/icon3.svg";
import icon4 from "./assets/images/Footer/icon4.svg";
import icon5 from "./assets/images/Footer/icon5.svg";

function App() {
  return (
    <div>
        <div className='container'>
           <header>
               <div className='searchPart'>
                   <img className='arrow' src={arrow} alt='arrow'/>
                   <div className='inputWrapper'>
                       <input className='input' type='text' placeholder='Rolling in the deep'/>
                       <img className='searchIcon' src={search} alt='serach'/>
                   </div>
                   <div className='newTrack'>
                       <p>Новые треки</p>
                       <img className='trackIcon' src={bottomArrow} alt='bottomArrow'/>
                   </div>
               </div>
               <div className='pagesPart'>
                   <p className='text'>Треки</p>
                   <p className='text'>Исполнители</p>
                   <p className='text'>Плейлисты</p>
               </div>
               <div className='line'></div>
           </header>
            <div className='wrapperList'>
                <div className='wrapperAu'>
                    <h2 className='song'>Rolling in the deep</h2>
                    <p className='singer'>Adele</p>
                </div>
                <div className='icons'>
                    <img className='iconList' src={player} alt='player'/>
                    <img className='iconList' src={star} alt='star'/>
                </div>
            </div>
            <div className='line'></div>




            <div className='wrapperList'>
                <div className='wrapperAu'>
                    <h2 className='song'>Rolling in the deep</h2>
                    <p className='singer'>Adele</p>
                </div>
                <div className='icons'>
                    <img className='iconList' src={player} alt='player'/>
                    <img className='iconList' src={star} alt='star'/>
                </div>
            </div>
            <div className='line'></div>
            <div className='wrapperList'>
                <div className='wrapperAu'>
                    <h2 className='song'>Rolling in the deep</h2>
                    <p className='singer'>Adele</p>
                </div>
                <div className='icons'>
                    <img className='iconList' src={player} alt='player'/>
                    <img className='iconList' src={star} alt='star'/>
                </div>
            </div>
            <div className='line'></div><div className='wrapperList'>
                <div className='wrapperAu'>
                    <h2 className='song'>Rolling in the deep</h2>
                    <p className='singer'>Adele</p>
                </div>
                <div className='icons'>
                    <img className='iconList' src={player} alt='player'/>
                    <img className='iconList' src={star} alt='star'/>
                </div>
            </div>
            <div className='line'></div><div className='wrapperList'>
                <div className='wrapperAu'>
                    <h2 className='song'>Rolling in the deep</h2>
                    <p className='singer'>Adele</p>
                </div>
                <div className='icons'>
                    <img className='iconList' src={player} alt='player'/>
                    <img className='iconList' src={star} alt='star'/>
                </div>
            </div>
            <div className='line'></div><div className='wrapperList'>
                <div className='wrapperAu'>
                    <h2 className='song'>Rolling in the deep</h2>
                    <p className='singer'>Adele</p>
                </div>
                <div className='icons'>
                    <img className='iconList' src={player} alt='player'/>
                    <img className='iconList' src={star} alt='star'/>
                </div>
            </div>
            <div className='line'></div><div className='wrapperList'>
                <div className='wrapperAu'>
                    <h2 className='song'>Rolling in the deep</h2>
                    <p className='singer'>Adele</p>
                </div>
                <div className='icons'>
                    <img className='iconList' src={player} alt='player'/>
                    <img className='iconList' src={star} alt='star'/>
                </div>
            </div>
            <div className='line'></div><div className='wrapperList'>
                <div className='wrapperAu'>
                    <h2 className='song'>Rolling in the deep</h2>
                    <p className='singer'>Adele</p>
                </div>
                <div className='icons'>
                    <img className='iconList' src={player} alt='player'/>
                    <img className='iconList' src={star} alt='star'/>
                </div>
            </div>
            <div className='line'></div><div className='wrapperList'>
                <div className='wrapperAu'>
                    <h2 className='song'>Rolling in the deep</h2>
                    <p className='singer'>Adele</p>
                </div>
                <div className='icons'>
                    <img className='iconList' src={player} alt='player'/>
                    <img className='iconList' src={star} alt='star'/>
                </div>
            </div>
            <div className='line'></div><div className='wrapperList'>
                <div className='wrapperAu'>
                    <h2 className='song'>Rolling in the deep</h2>
                    <p className='singer'>Adele</p>
                </div>
                <div className='icons'>
                    <img className='iconList' src={player} alt='player'/>
                    <img className='iconList' src={star} alt='star'/>
                </div>
            </div>
            <div className='line'></div><div className='wrapperList'>
                <div className='wrapperAu'>
                    <h2 className='song'>Rolling in the deep</h2>
                    <p className='singer'>Adele</p>
                </div>
                <div className='icons'>
                    <img className='iconList' src={player} alt='player'/>
                    <img className='iconList' src={star} alt='star'/>
                </div>
            </div>
            <div className='line'></div>




            <footer>
                <div className='lineFooter'></div>
                <div className='iconsFooter'>
                    <img className='icon' src={icon1} alt='icon' />
                    <img className='icon' src={icon2} alt='icon' />
                    <img className='icon' src={icon3} alt='icon' />
                    <img className='icon' src={icon4} alt='icon' />
                    <img className='icon' src={icon5} alt='icon' />
                </div>
            </footer>
        </div>
    </div>
  );
}

export default App;
