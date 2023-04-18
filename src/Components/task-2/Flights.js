import {Flight} from "./Flight"
import {useEffect, useState} from "react";
import axios from "axios";
const Flights = () => {
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        axios('https://api.spacexdata.com/v3/launches/').then(value => value.data).then(value => setFlights(
            value.filter(item => item.launch_year !== "2020")
        ))
    })

    return (
        <div>
            {flights.map(flight => <Flight key={flight.flight_number} flight={flight}/>)}
        </div>
    );
};

export {Flights};