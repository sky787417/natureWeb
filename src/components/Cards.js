
import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these Glory of Nature</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img1.jpg'
                            text='Beach of Pondicherry'
                            label='Adven'
                            path='/services'
                        />
                    
                        <CardItem
                            src='images/img2.jpg'
                            text='Kerela Bacl water India'
                            label='Adven'
                            path='/services'
                        />
                    </ul>


                    <ul className='cards__items'>
                        <CardItem
                            src='images/img3.jpg'
                            text='Mountainn view Kashmir'
                            label='Adven'
                            path='/services'
                        />

                        <CardItem
                            src='images/img4.jpg'
                            text='badami karnataka india '
                            
                            label='Adven'
                            path='/products'
                        />
                        <CardItem
                            src='images/img6.jpg'
                            text='Alappuzha, Kerala, India'
                            
                            label='Adven'
                            path='/products' />
                    </ul>


                    <ul className='cards__items'>
                        <CardItem
                            src='images/img5.jpg'
                            text= 'Zig Zag Zuluk India'
                            label='amaze'
                            path='/sign-up'
                        />
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Cards;