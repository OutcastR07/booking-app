import React from 'react'
import useFetch from '../../hooks/useFetch';
import './FeaturedProperties.css'

const FeaturedProperties = () => {

    const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");

    return (
        <div className='featured__properties'>
            {loading ? "Loading" : <>
                {data.map(item => (
                    <div className="featured__propertiesItem" key={item._id}>
                        <img src={item.photos[0]} alt="" className="featured__propertiesImg" />
                        <span className='featured__propertiesName'>{item.name}</span>
                        <span className='featured__propertiesCity'>{item.city}</span>
                        <span className='featured__propertiesPrice'>Starting from ${item.cheapestPrice}</span>
                        {item.rating && <div className="featured__propertiesRating">
                            <button>{item.rating}</button>
                            <span>Excellent</span>
                        </div>}
                    </div>
                ))}
            </>}
        </div>
    )
}

export default FeaturedProperties