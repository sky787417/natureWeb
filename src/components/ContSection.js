import React from 'react';
import './ContSection.css';
import '../App.css';
import { Button } from "./Button"

function ContSection() {
    
    return (
        <div className='cont-container'>
            <video src="videos/video.mp4" autoPlay loop muted />
            <h1>EXPLORE NATURE</h1>
            <p>LETS DIVE IN THE BEAUTY OF MOTHER NATURE </p>
            <div className='cont-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    GET STARTED
                </Button>


                <Button

                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                >
                    WATCH TRAILER <i className='far fa-play-circle' />
                </Button>
            </div>



        </div>
    )
}

export default ContSection;
