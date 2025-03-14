// import reminderImage from './img/reminder.png';
import InfoComponent from '@/components/info/InfoComponent';
import './Home.scss';
import Header from '@/components/header/Header';

function Home () {
  return (
        <div className='home'>
            <Header/>
            <div className='home__components'>
              <InfoComponent/>
            </div>
        </div>
  );
}

export default Home;
