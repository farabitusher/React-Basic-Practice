import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div className='home-bag'>
            <div className='hero-text text-sm bg-slate-400'>
                <h1>Best <span className='bag-text'>Bags</span> Reviews <br /> in the Internet</h1>
            </div>
            <div>
                <img  src={require("./bag1.jpg")} alt="" />
            </div>
        </div>
    );
};

export default Home;