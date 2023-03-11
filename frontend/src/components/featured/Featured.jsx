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
                        <img src="https://th.bing.com/th/id/R.d21cf90af0bfece59d05ae522873fd40?rik=F4F%2f3HzP4JBnVw&riu=http%3a%2f%2fwww.wallpaperbetter.com%2fwallpaper%2f841%2f996%2f44%2fberlin-germany-city-night-lights-buildings-river-1080P-wallpaper.jpg&ehk=fYJ%2fxglCjqnlZrja2rZvkJIMR%2fayncCrycuP6Vd99ps%3d&risl=&pid=ImgRaw&r=0" alt="" className='featured__image' />
                        <div className="featured__titles">
                            <h1>Berlin</h1>
                            <h2>{data[0]} properties</h2>
                        </div>
                    </div>
                    <div className="featured__item">
                        <img src="https://th.bing.com/th/id/R.ddb2fbc95d990ac4b58109720e4a1963?rik=cKHJwEU9rDczHw&riu=http%3a%2f%2fkongres-magazine.eu%2fwp-content%2fuploads%2f2017%2f01%2fMadrids-icons.-Metropolis-building.jpg&ehk=dFO2LJmE9RDYduk22q2gWlGFTF3lN7S1S%2bb0hAGW9ao%3d&risl=&pid=ImgRaw&r=0" alt="" className='featured__image' />
                        <div className="featured__titles">
                            <h1>Madrid</h1>
                            <h2>{data[1]} properties</h2>
                        </div>
                    </div>
                    <div className="featured__item">
                        <img src="https://2.bp.blogspot.com/-NjE5GgoghyM/V11hoaUV9KI/AAAAAAACMbM/JgVqMrRevDEkZ1eQUAtWtjr3wSw1rWjegCLcB/s1600/1.jpg" alt="" className='featured__image' />
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