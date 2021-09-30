import React from 'react';
import '../styles/components/Success.css';

function Success () {
    return (
        <div className="Success">
            <div className="Success-content">
                <h2>Oscar, Gracias por tu compra </h2>
                <span>Tu pedido llegará en 3 días a tu dirección</span>
                <div className="Success-map">
                    Google map
                </div>
            </div>
        </div>
    )
}

export { Success  };