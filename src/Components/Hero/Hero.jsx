import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero.jpg'

const Hero = () => {
    return( 
        <div className="hero">
            <div className="hero-left">
                <h2>NEW ARIVALS ONLY</h2>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>collection</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="" />
            </div>
            <div className="hero-right">
                <img src={hero_image} alt="" />
            </div>
        </div>
    )
}

export default Hero