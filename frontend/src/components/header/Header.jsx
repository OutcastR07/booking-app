import React from 'react'
import './Header.css'
import HotelIcon from '@mui/icons-material/Hotel';
import FlightIcon from '@mui/icons-material/Flight';
import CarRentalIcon from '@mui/icons-material/CarRental';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import AttractionsIcon from '@mui/icons-material/Attractions';

const Header = () => {
    return (
        <div className='header'>
            <div className="header__container">
                <div className="header__list">
                    <div className="header__listItem active">
                        <HotelIcon />
                        <span>Hotels</span>
                    </div>
                    <div className="header__listItem">
                        <FlightIcon />
                        <span>Flights</span>
                    </div>
                    <div className="header__listItem">
                        <CarRentalIcon />
                        <span>Car Rentals</span>
                    </div>
                    <div className="header__listItem">
                        <AttractionsIcon />
                        <span>Attractions</span>
                    </div>
                    <div className="header__listItem">
                        <LocalTaxiIcon />
                        <span>Taxis</span>
                    </div>
                </div>
                <h1 className="header__title">
                    A lifetime of discounts? It's a Genius.
                </h1>
                <p className='header__description'>
                    Get rewarded for booking - unlock instant savings of 10% or more with a free bookingDotCom account.
                </p>
                <button className="header__button">
                    Sign in / Register
                </button>
            </div>
        </div>
    )
}

export default Header