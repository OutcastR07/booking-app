import React from 'react'
import './SearchItem.css'

const SearchItem = () => {
    return (
        <div className='search__item'>
            <img
                src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/424314221.jpg?k=045a739f8ccd79a777dc3a2f3c6f0f62a983e4d9c7926acf30b2659eafba9e8e&o=&hp=1"
                alt=""
                className="search__itemImg"
            />
            <div className="search__itemDescription">
                <h1 className="search__itemTitle">Huge Ocean Front Condo</h1>
                <span className="search__itemDistance">1.8 km from centre</span>
                <span className="search__itemTaxiOperations">Free airport Taxi</span>
                <span className="search__itemSubtitle">Whole Condo Air-Conditioned</span>
                <span className="search__itemFeatures">Entire condo • 2 Bedrooms • 2 Bathrooms • 1 Dinning • 1 Kitchen</span>
                <span className="search__itemCancelOperations">Free Cancellation</span>
                <span className="search__itemCancelOperationsSubtitle">You can cancel later, so lock in this great price today!</span>
            </div>
            <div className="search__itemDetails">
                <div className="search__itemRating">
                    <span>Excellent</span>
                    <button>9.3</button>
                </div>
                <div className="search__itemDetailTexts">
                    <span className="search__itemPrice">$210</span>
                    <span className="search__itemTaxOperations">Includes taxes and fees</span>
                    <button className='search__itemCheckButton'>See availability</button>
                </div>
            </div>
        </div>
    )
}

export default SearchItem