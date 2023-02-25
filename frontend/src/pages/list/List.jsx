import { format } from 'date-fns'
import React, { useState } from 'react'
import { DateRange } from 'react-date-range'
import { useLocation } from 'react-router-dom'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import SearchItem from '../../components/searchItem/SearchItem'
import useFetch from '../../hooks/useFetch'
import './List.css'

const List = () => {

    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination)
    const [dates, setDates] = useState(location.state.dates)
    const [openCalendar, setOpenCalendar] = useState(false)
    const [options, setOptions] = useState(location.state.options)
    const [min, setMin] = useState(undefined)
    const [max, setMax] = useState(undefined)

    const { data, loading, error, reFetch } = useFetch(`/hotels?city=${destination}&min=${min || 0}&max=${max || 999}`);

    const handleClick = () => {
        reFetch()
    }

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
                            <span onClick={() => setOpenCalendar(!openCalendar)}>{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
                            {openCalendar && (
                                <DateRange
                                    onChange={item => setDates([item.selection])}
                                    minDate={new Date()}
                                    ranges={dates}
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
                                    <input type="number" onChange={e => setMin(e.target.value)} className="list__searchOptionInput" />
                                </div>
                                <div className="list__searchOptionItem">
                                    <span className="list__searchOptionText">
                                        Max Price <small>per night</small>
                                    </span>
                                    <input type="number" onChange={e => setMax(e.target.value)} className="list__searchOptionInput" />
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
                        <button onClick={handleClick}>Search</button>
                    </div>
                    <div className="list__result">
                        {loading ? "loading" : <>
                            {data.map(item => (
                                <SearchItem item={item} key={item._id} />
                            ))}
                        </>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List