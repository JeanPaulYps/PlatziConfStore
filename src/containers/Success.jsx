import React, { useContext } from 'react';
import { Map } from '../components/Map';
import { AppContext } from '../context/Appcontext';
import { useGoogleAddress } from '../hooks/useGoogleAddress';
import '../styles/components/Success.css';

function Success () {
    const {state} = useContext(AppContext);
    const { buyer } = state; 
    const location = {lat: 6.2684774, lng: -75.6038788};
    /*const location = useGoogleAddress(buyer[0].address);*/

    return (
        <div className="Success">
            <div className="Success-content">
                <h2>{`${buyer[0].name}, Gracias por tu compra`}</h2>
                <span>Tu pedido llegará en 3 días a tu dirección</span>
                <div className="Success-map">
                    <Map data={location}/>
                </div>
            </div>
        </div>
    )
}

export { Success  };