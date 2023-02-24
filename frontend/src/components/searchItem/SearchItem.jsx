import React from 'react'
import { Link } from 'react-router-dom'
import './SearchItem.css'

const SearchItem = ({ item }) => {
    return (
        <div className='search__item'>
            <img
                src={item.photos[0]}
                alt=""
                className="search__itemImg"
            />
            <div className="search__itemDescription">
                <h1 className="search__itemTitle">{item.name}</h1>
                <span className="search__itemDistance">{item.distance}m from centre</span>
                <span className="search__itemTaxiOperations">Free airport Taxi</span>
                <span className="search__itemSubtitle">Whole Condo Air-Conditioned</span>
                <span className="search__itemFeatures">{item.desc}</span>
                <span className="search__itemCancelOperations">Free Cancellation</span>
                <span className="search__itemCancelOperationsSubtitle">You can cancel later, so lock in this great price today!</span>
            </div>
            <div className="search__itemDetails">
                {item.rating && <div className="search__itemRating">
                    <span>Excellent</span>
                    <button>{item.rating}</button>
                </div>}
                <div className="search__itemDetailTexts">
                    <span className="search__itemPrice">${item.cheapestPrice}</span>
                    <span className="search__itemTaxOperations">Includes taxes and fees</span>
                    <Link to={`/hotels/${item._id}`}>
                        <button className='search__itemCheckButton'>See availability</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SearchItem