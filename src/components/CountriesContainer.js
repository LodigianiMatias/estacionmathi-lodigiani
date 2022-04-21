import { useEffect, useState } from "react";


const CountriesContainer = () => {

    const countriesList = ['Mexico', 'Argentina', 'Australia', 'Colombia', 'Uruguay', 'Costa Rica']

    const [countries, setCountries] = useState([])

    useEffect(() => {
        console.log('[CountriesContainer] Mounting...');
        console.log('Lista de paises', countries);

        const promesa = new Promise((res, rej) => {
            const rand = Math.random()
            console.log('Random', rand);
            setTimeout(() => {
                if (rand >= 0.5) {
                    res(countriesList)
                } else {
                    rej('Rechazada!!!')
                }
            }, 3000)
        })

        promesa
            .then(result => {
                console.log('La promesa fue satisfecha', result);
                setCountries(result);
            })
            .catch(err => {
                console.log('La promesa fue rechazada', err);
            })

    }, [])

    return (
        <div style={{ border: 'solid green 2px' }}>
            <h1>CountriesContainer</h1>
            {countries.map((c, i) => <li key={i}>{c}</li>)}
        </div>
    )
}
export default CountriesContainer