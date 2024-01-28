import React from 'react';  
import '../styles/Home.css'
import Greeting from '../assets/greeting.gif'
import Ikigai from '../assets/ikigai.jpg'
import { Link } from 'react-router-dom';
import { BsEmojiWink } from "react-icons/bs";

function Home() {
  return (
    <div className='home'>
        <div className="home-content">
            <div className="greeting-words">
                <p>Hi there! <BsEmojiWink /></p>
                <p>Looking for your next read?</p>
                <p>Well, you've come to the right place.</p>
                <h1>Welcome to Umbreon Books Library</h1>
                <p>Don't forget to check out our curated recommendations and discover hidden literary gems.</p>
                <p>And remember, every book you pre-order comes with an exclusive discount as our way of saying thank you for choosing us.</p>
            </div>
            <img src={Greeting} alt="greeting" className='greeting' />
        </div>
        <div className="home-categories">
            <h2>Popular categories</h2>
            <div className="categories-card">
                <div className='card'>
                    <img src={Ikigai} alt="img"/>
                    <span>Bestsellers</span>
                </div>

                <div className='card'>
                    <img src={Ikigai} alt="img"/>
                    <span>Bestsellers</span>
                </div>

                <div className='card'>
                    <img src={Ikigai} alt="img"/>
                    <span>Bestsellers</span>
                </div>
            </div>
            <Link className='see-all'>
                <span>See all categories</span>
            </Link>
        </div>
    </div>
  )
}

export default Home