import React from 'react'
import useFetch from '../../hooks/useFetch'
import './Featured.css'

const Featured = () => {

    const { data, loading, error } = useFetch("/hotels/countByCity?cities=berlin,madrid,london");

    return (
        <div className='featured'>
            {loading ? ("Loading, please wait....") : (
                <>
                    <div className="featured__item">
                        <img src="https://th.bing.com/th/id/R.19489425179b1186a3c38d0fdea8e27d?rik=kikbMkX%2fEK1BkQ&pid=ImgRaw&r=0" alt="" className='featured__image' />
                        <div className="featured__titles">
                            <h1>Berlin</h1>
                            <h2>{data[0]} properties</h2>
                        </div>
                    </div>
                    <div className="featured__item">
                        <img src="https://pathfriend-bd.com/wp-content/uploads/2019/08/Sundarban.jpg" alt="" className='featured__image' />
                        <div className="featured__titles">
                            <h1>Madrid</h1>
                            <h2>{data[1]} properties</h2>
                        </div>
                    </div>
                    <div className="featured__item">
                        <img src="https://th.bing.com/th/id/R.e004b9b86326d71db83b33d52891a592?rik=1INkfy7K1vdBzg&riu=http%3a%2f%2fbdsearcher.com%2fwp-content%2fuploads%2f2017%2f12%2fBichanakandi.jpg&ehk=3yox3AI5ia31S1pL1E6se7vi87MmEUsLvxFfyCW6nME%3d&risl=&pid=ImgRaw&r=0" alt="" className='featured__image' />
                        <div className="featured__titles">
                            <h1>London</h1>
                            <h2>{data[2]} properties</h2>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default Featured