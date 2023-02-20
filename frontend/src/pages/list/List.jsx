import { format } from 'date-fns'
import React, { useState } from 'react'
import { DateRange } from 'react-date-range'
import { useLocation } from 'react-router-dom'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import SearchItem from '../../components/searchItem/SearchItem'
import './List.css'

const List = () => {

    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination)
    const [date, setDate] = useState(location.state.date)
    const [openCalendar, setOpenCalendar] = useState(false)
    const [options, setOptions] = useState(location.state.options)

    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="list__container">
                <div className="liist__wrapper">
                    <div className="list__search">
                        <h1 className="list__searchTitle">Search</h1>
                        <div className="list__searchItem">
                            <label>Destination</label>
                            <input type="text" placeholder={destination} />
                        </div>
                        <div className="list__searchItem">
                            <label>Check-in Date</label>
                            <span onClick={() => setOpenCalendar(!openCalendar)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                            {openCalendar && (
                                <DateRange
                                    onChange={item => setDate([item.selection])}
                                    minDate={new Date()}
                                    ranges={date}
                                />
                            )}
                        </div>
                        <div className="list__searchItem">
                            <label>Options</label>
                            <div className="list__searchOptions">
                                <div className="list__searchOptionItem">
                                    <span className="list__searchOptionText">
                                        Min Price <small>per night</small>
                                    </span>
                                    <input type="number" className="list__searchOptionInput" />
                                </div>
                                <div className="list__searchOptionItem">
                                    <span className="list__searchOptionText">
                                        Max Price <small>per night</small>
                                    </span>
                                    <input type="number" className="list__searchOptionInput" />
                                </div>
                                <div className="list__searchOptionItem">
                                    <span className="list__searchOptionText">
                                        Adult
                                    </span>
                                    <input
                                        type="number"
                                        className="list__searchOptionInput"
                                        placeholder={options.adult}
                                        min={1}
                                    />
                                </div>
                                <div className="list__searchOptionItem">
                                    <span className="list__searchOptionText">
                                        Children
                                    </span>
                                    <input
                                        type="number"
                                        className="list__searchOptionInput"
                                        placeholder={options.children}
                                        min={0}
                                    />
                                </div>
                                <div className="list__searchOptionItem">
                                    <span className="list__searchOptionText">
                                        Room
                                    </span>
                                    <input
                                        type="number"
                                        className="list__searchOptionInput"
                                        placeholder={options.room}
                                        min={1}
                                    />
                                </div>
                            </div>
                        </div>
                        <button>Search</button>
                    </div>
                    <div className="list__result">
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List