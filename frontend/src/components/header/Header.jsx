import React, { useContext } from 'react'
import './Header.css'
import HotelIcon from '@mui/icons-material/Hotel';
import FlightIcon from '@mui/icons-material/Flight';
import CarRentalIcon from '@mui/icons-material/CarRental';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import AttractionsIcon from '@mui/icons-material/Attractions';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import { useNavigate } from "react-router-dom"
import { SearchContext } from '../../context/SearchContext';
import { AuthContext } from '../../context/AuthContext';

const Header = ({ type }) => {

    const [destination, setDestination] = useState("");
    const [openCalendar, setOpenCalendar] = useState(false);
    const [dates, setDates] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 0,
        children: 0,
        room: 0,
    })

    const navigate = useNavigate()
    const { user } = useContext(AuthContext);

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            }
        })
    }

    const { dispatch } = useContext(SearchContext)

    const handleSearch = () => {
        dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } })
        navigate("/hotels", { state: { destination, dates, options } })
    }

    return (
        <div className='header'>
            <div className={type === "list" ? "header__container listMode" : "header__container"}>
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
                {type !== "list" &&
                    <>
                        <h1 className="header__title">
                            A lifetime of discounts? It's a Genius.
                        </h1>
                        <p className='header__description'>
                            Get rewarded for booking - unlock instant savings of 10% or more with a free bookingDotCom account.
                        </p>
                        {
                            !user && <button className="header__button">
                                Sign in / Register
                            </button>
                        }
                        <div className="header__search">
                            <div className="header__searchItem">
                                <HotelIcon className='header__icon' />
                                <input
                                    type="text"
                                    placeholder='Your destination'
                                    className='header__searchInput'
                                    onChange={e => setDestination(e.target.value)}
                                />
                            </div>
                            <div className="header__searchItem">
                                <CalendarMonthIcon className='header__icon' />
                                <span
                                    onClick={() => setOpenCalendar(!openCalendar)}
                                    className='header__searchText'>
                                    {`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}
                                </span>
                                {openCalendar && <DateRange
                                    editableDateInputs={true}
                                    onChange={item => setDates([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    minDate={new Date()}
                                    ranges={dates}
                                    className="date"
                                />}
                            </div>
                            <div className="header__searchItem">
                                <PersonIcon className='header__icon' />
                                <span
                                    className='header__searchText'
                                    onClick={() => setOpenOptions(!openOptions)}>
                                    {`${options.adult} adult • ${options.children} children • ${options.room} room`}
                                </span>
                                {openOptions && <div className="options">
                                    <div className="options__item">
                                        <span className='options__text'>Adult</span>
                                        <div className="options__counter">
                                            <button
                                                disabled={options.adult <= 1}
                                                className="options__counterDecrease"
                                                onClick={() => handleOption("adult", "d")}>
                                                -
                                            </button>
                                            <span
                                                className='option__counterNumber'>
                                                {options.adult}
                                            </span>
                                            <button
                                                className="options__counterIncrease"
                                                onClick={() => handleOption("adult", "i")}>
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <div className="options__item">
                                        <span className='options__text'>Children</span>
                                        <div className="options__counter">
                                            <button
                                                disabled={options.children <= 0}
                                                className="options__counterDecrease"
                                                onClick={() => handleOption("children", "d")}>
                                                -
                                            </button>
                                            <span
                                                className='option__counterNumber'>
                                                {options.children}
                                            </span>
                                            <button
                                                className="options__counterIncrease"
                                                onClick={() => handleOption("children", "i")}>
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <div className="options__item">
                                        <span className='options__text'>Room</span>
                                        <div className="options__counter">
                                            <button
                                                disabled={options.room <= 1}
                                                className="options__counterDecrease"
                                                onClick={() => handleOption("room", "d")}>
                                                -
                                            </button>
                                            <span
                                                className='option__counterNumber'>
                                                {options.room}
                                            </span>
                                            <button
                                                className="options__counterIncrease"
                                                onClick={() => handleOption("room", "i")}>
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>}
                            </div>
                            <div className="header__searchItem">
                                <button className='header__button' onClick={handleSearch}>Search</button>
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default Header