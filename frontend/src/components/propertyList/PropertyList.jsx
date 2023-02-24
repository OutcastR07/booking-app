import React from 'react'
import useFetch from '../../hooks/useFetch';
import './PropertyList.css'

const PropertyList = () => {

    const { data, loading, error } = useFetch("/hotels/countByType");

    const images = [
        "http://a.mktgcdn.com/p/LrJiGkslAITLntsgYT9Ap0swW956VQgc5P2_ulVw94g/2048x1152.jpg",
        "https://th.bing.com/th/id/R.9e64d848990f29e0ff8459c7819a5d42?rik=Cip52Y%2bN0W%2fQXg&pid=ImgRaw&r=0",
        "https://th.bing.com/th/id/R.dbbbfc68edbb89c32678faa1ddc8437c?rik=VSqf7oAmMn9pmQ&pid=ImgRaw&r=0",
        "https://th.bing.com/th/id/R.7d2908a7532ea1baa16d99358bbeb8b1?rik=7OoRv93zAcv3Jg&pid=ImgRaw&r=0",
        "https://i1.wp.com/patriotgetaways.com/blog/wp-content/uploads/2018/01/mountain-cabin.jpg?fit=2000%2C1333&ssl=1"
    ];

    return (
        <div className='property__list'>
            {loading ? (
                "loading"
            ) : (
                <>
                    {data && images.map((img, i) => (
                        <div className="property__listItem" key={i}>
                            <img
                                src={img}
                                alt=""
                                className="property__listImg"
                            />
                            <div className="property__listTitles">
                                <h1>{data[i]?.type}</h1>
                                <h2>{data[i]?.count} {data[i]?.type}</h2>
                            </div>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
};

export default PropertyList