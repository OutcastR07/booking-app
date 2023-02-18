import React from 'react'
import './PropertyList.css'

const PropertyList = () => {
    return (
        <div className='property__list'>
            <div className="property__listItem">
                <img src="http://a.mktgcdn.com/p/LrJiGkslAITLntsgYT9Ap0swW956VQgc5P2_ulVw94g/2048x1152.jpg" alt="" className="property__listImg" />
                <div className="property__listTitles">
                    <h1>Hotels</h1>
                    <h2>312 hotels</h2>
                </div>
            </div>
            <div className="property__listItem">
                <img src="https://th.bing.com/th/id/R.9e64d848990f29e0ff8459c7819a5d42?rik=Cip52Y%2bN0W%2fQXg&pid=ImgRaw&r=0" alt="" className="property__listImg" />
                <div className="property__listTitles">
                    <h1>Apartments</h1>
                    <h2>1216 apartments</h2>
                </div>
            </div>
            <div className="property__listItem">
                <img src="https://th.bing.com/th/id/R.dbbbfc68edbb89c32678faa1ddc8437c?rik=VSqf7oAmMn9pmQ&pid=ImgRaw&r=0" alt="" className="property__listImg" />
                <div className="property__listTitles">
                    <h1>Resorts</h1>
                    <h2>177 resorts</h2>
                </div>
            </div>
            <div className="property__listItem">
                <img src="https://th.bing.com/th/id/R.7d2908a7532ea1baa16d99358bbeb8b1?rik=7OoRv93zAcv3Jg&pid=ImgRaw&r=0" alt="" className="property__listImg" />
                <div className="property__listTitles">
                    <h1>Villas</h1>
                    <h2>129 villas</h2>
                </div>
            </div>
            <div className="property__listItem">
                <img src="https://i1.wp.com/patriotgetaways.com/blog/wp-content/uploads/2018/01/mountain-cabin.jpg?fit=2000%2C1333&ssl=1" alt="" className="property__listImg" />
                <div className="property__listTitles">
                    <h1>Cabins</h1>
                    <h2>161 cabins</h2>
                </div>
            </div>
        </div>
    )
}

export default PropertyList