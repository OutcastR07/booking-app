import React, { useContext, useState } from 'react'
import './Reserve.css'
import CancelIcon from '@mui/icons-material/Cancel';
import useFetch from '../../hooks/useFetch';
import { SearchContext } from '../../context/SearchContext';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

const Reserve = ({ setOpen, hotelId }) => {

    const [selectedRooms, setSelectedRooms] = useState([])
    const { data, loading, error } = useFetch(`/hotels/room/${hotelId}`)
    const { dates } = useContext(SearchContext)

    const getDatesInRange = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);

        const date = new Date(start.getTime());

        let dates = []

        while (date <= end) {
            dates.push(new Date(date).getTime());
            date.setDate(date.getDate() + 1);
        }

        return dates;
    };

    const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);

    const isAvailable = (roomNumber) => {
        const isFound = roomNumber.unavailableDates.some((date) =>
            alldates.includes(new Date(date).getTime())
        );

        return !isFound;
    };

    const handleSelect = (e) => {
        const checked = e.target.checked
        const value = e.target.value
        setSelectedRooms(checked ? [...selectedRooms, value] : selectedRooms.filter((item) => item !== value)
        );
    };

    const navigate = useNavigate();

    const handleClick = async () => {
        try {
            await Promise.all(
                selectedRooms.map((roomId) => {
                    const res = axios.put(`/rooms/availability/${roomId}`, {
                        dates: alldates,
                    });
                    return res.data;
                })
            );
            setOpen(false);
            navigate("/");
        } catch (err) { }
    };

    return (
        <div className='reserve'>
            <div className="reserve__container">
                <CancelIcon
                    className='reserve__close'
                    onClick={() => setOpen(false)}
                />
                <span>Select your rooms: </span>
                {data.map((item) => (
                    <div className="reserve__item">
                        <div className="reserve__itemInfo">
                            <div className="reserve__title">{item.title}</div>
                            <div className="reserve__description">{item.desc}</div>
                            <div className="reserve__max">Max People: <b>{item.maxPeople}</b></div>
                            <div className="reserve__price">{item.price}</div>
                        </div>
                        <div className="reserve__selectRooms">
                            {item.roomNumbers.map((roomNumber) => (
                                <div className="room">
                                    <label>{roomNumber.number}</label>
                                    <input type="checkbox" value={roomNumber._id} onChange={handleSelect} disabled={!isAvailable(roomNumber)} />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                <button onClick={handleClick} className='reserve__button'>
                    Reserve Now!
                </button>
            </div>
        </div>
    );
}

export default Reserve