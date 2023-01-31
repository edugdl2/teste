import Navbar from './components/Bottom-navbar';
import Header from './components/Header';
import dumbells from './imgs/dumbells.png'

const Main = () => {
    return ( 
        <div style={{backgroundColor:"black"}}>
            <Header/>
                <div className='slogan'>
                    <img src={dumbells} alt='dumbells'/>
                    <h2>O site para quem quer melhorar seus resultados.</h2>
                    <img className='img2' src={dumbells} alt='dumbells'/>
                </div>
            <Navbar/>
        </div>
     );
}
 
export default Main;