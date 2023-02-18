import React from 'react'
import './FeaturedProperties.css'

const FeaturedProperties = () => {
    return (
        <div className='featured__properties'>
            <div className="featured__propertiesItem">
                <img src="https://images.trvl-media.com/hotels/11000000/10580000/10578000/10577932/649b7896_z.jpg" alt="" className="featured__propertiesImg" />
                <span className='featured__propertiesName'>Platinum Residence</span>
                <span className='featured__propertiesCity'>Uttara</span>
                <span className='featured__propertiesPrice'>Starting from Tk. 8,030</span>
                <div className="featured__propertiesRating">
                    <button>8.0</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="featured__propertiesItem">
                <img src="https://q-xx.bstatic.com/xdata/images/hotel/max1280x900/47746970.jpg?k=1daa2dbc708d476d34c2f9498ee9173fbd10c48893c1d36a1a5d137bd1601d5c&o=" alt="" className="featured__propertiesImg" />
                <span className='featured__propertiesName'>Platinum Grand</span>
                <span className='featured__propertiesCity'>Gulshan</span>
                <span className='featured__propertiesPrice'>Starting from Tk. 9,012</span>
                <div className="featured__propertiesRating">
                    <button>9.0</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="featured__propertiesItem">
                <img src="https://q-xx.bstatic.com/xdata/images/hotel/max1280x900/163454565.jpg?k=238f7d6876aa4ce11965dd0c13a1928dc2b11492d2ffb0810559d30803785903&o=" alt="" className="featured__propertiesImg" />
                <span className='featured__propertiesName'>Galesia Hotel and Resort</span>
                <span className='featured__propertiesCity'>Banani</span>
                <span className='featured__propertiesPrice'>Starting from Tk. 6,596</span>
                <div className="featured__propertiesRating">
                    <button>7.3</button>
                    <span>Good</span>
                </div>
            </div>
            <div className="featured__propertiesItem">
                <img src="https://th.bing.com/th/id/OIP.3WLnwkfb638Uxi5MwRPyKAHaE8?pid=ImgDet&rs=1" alt="" className="featured__propertiesImg" />
                <span className='featured__propertiesName'>Renessaince Dallas</span>
                <span className='featured__propertiesCity'>Dallas</span>
                <span className='featured__propertiesPrice'>Starting from Tk. 12,560</span>
                <div className="featured__propertiesRating">
                    <button>9.4</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProperties