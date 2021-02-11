import React from 'react';
import './../App.css';
import { Button } from './Button.js';
import './MainSection.css';

function MainSection() {
    return (
        <div className='hero-container'>
            <video src='/assets/video-1.mp4' autoPlay loop muted />
            <h1>My Journey</h1>
            <p>Thanks for your time</p>
            <div className='hero-btns'>
                <Button className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    GET STARTED
                </Button>
                <Button className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                >
                    WATCH TRAILER <i className='far fa-play-circle' />
                </Button>
            </div>
            <div>
            </div>
        </div>
    )
}

export default MainSection;