import React, { useEffect, useState } from 'react';
import axios from 'axios';

function WeatherComponent() {
    const [climaData, setClimaData] = useState(null);
    const [cargando, setCargando] = useState(true);
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=Buenos%20Aires,ar&appid=ea64807460cedbd450d314ef4e2597be`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(URL);
                setClimaData(response.data);
                setCargando(false);
            } catch (error) {
                console.error('Error al obtener los datos del clima:', error);
                setCargando(false);
            }
        };

        fetchData();
    }, []);

    if (cargando) {
        return <div>Cargando...</div>;
    }

    if (!climaData) {
        return <div>Clima no disponible.</div>;
    }

    const { name, weather, main } = climaData;

    return (
        <div>
            <h2>Clima en {name}</h2>
            <div>
                <strong>Clima Actual:</strong> {weather[0].description}
            </div>
            <div>
                <strong>Temperatura:</strong> {main.temp} Kelvin
            </div>
            <div>
                <strong>Humedad:</strong> {main.humidity}%
            </div>
        </div>
    );
}

export default WeatherComponent;

