import React, {useState, useEffect} from 'react'
import './Cities.css'

const Cities = () => {
    const [cities, setCities] = useState([]);

    useEffect(() => {
        const cities = JSON.parse(localStorage.getItem('cities'));
        if (cities) {
            setCities(cities);
        }
    }, []);

    return (
        <>
            {cities.length === 0 && <h2>There are no cities saved</h2>}
            {cities.length > 0 &&
            <article className='cities-container'>
                <h2>My Cities</h2>
                <p className='subtitle'>Here you can see the cities you have saved.</p>
                <ul className='cities'>
                {cities.map((city, index) => (
                    <li key={index}>
                        <a href={`weatherApp/?city=${city}`}>
                            {city}
                        </a>
                    </li>
                ))}
            </ul>
            </article>
            }
        </>
    )
}

export default Cities