import { useEffect, useState } from 'react';
import axios from 'axios';

const useGoogleAddress = address => {
    const [map, setMap] = useState({});
    const key  = process.env.REACT_APP_GOOGLE_ADDRESS_KEY;
    const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${key}`;

    useEffect( async () => {
        const response = await axios(API);
        setMap(response.data.results[0].geometry.location);

    },[]);

    return map;

}

export { useGoogleAddress }