import React from 'react';
import './home.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Featured from '../../components/featured/Featured';
import Job from '../../components/jobs/Job';
import Featuredjobs from '../../components/featuredjobs/Featuredjobs';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div>
         <Navbar/>
         <Header/>
         <div className='homeContainer'>
             <Featured/>
              <h1 className='homeTitle'>Browse By Job Types</h1>
              <Job/>
              <h1 className='homeTitle'>Best Jobs in the market</h1>
              <Featuredjobs/>
              <MailList/>
         </div>
    </div>


  );
}

export default Home