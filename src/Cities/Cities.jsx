import React, {useState, useEffect} from 'react'

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
        <article>
            <h2>My Cities</h2>
            <p>Here you can see the cities you have saved.</p>
            <ul>
            {cities.map((city, index) => (
                <li key={index}>{city}</li>
            ))}
        </ul>
        </article>
        }
    </>
  )
}

export default Cities