import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../context/Appcontext';
import '../styles/components/Payment.css';

function Payment () {
    const { state, addNewOrder } = useContext(AppContext);
    const { cart, buyer }= state;
    const history = useHistory();

    const paypalOptions = {
        clientId: process.env.REACT_APP_PAYPAL_CLIENT_ID,
        intent: 'capture',
        currency: 'USD'
    }

    const buttonStyles = {
        layout: 'vertical',
        shape: 'rect'
    }

    const handleSumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = cart.reduce(reducer, 0);
        return sum;
    }

    const handlePaymentSuccess = (data)=> {
        if (data.status === 'COMPLETED'){
            const newOrder = {
                buyer,
                product: cart,
                payment: data 
            }
            
            addNewOrder(newOrder);
            history.push('/checkout/success');
        }
    }

    return (
        <div className="Payment">
            <div className="Payment-content">
                <h3>Resumen del pedido: </h3>
                { cart.map((item => (
                    <div className="Payment-item" key = {item.title}>
                        <div className="Payment-element">
                            <h4>{item.title}</h4>
                            <span>${item.price}</span>
                        </div>
                    </div>
                )))}
                <div className="Payment-buttton">
                    <PayPalButton 
                        paypalOptions = {paypalOptions}
                        buttonStyles = {buttonStyles}
                        amount={handleSumTotal()}
                        onSuccess={data => handlePaymentSuccess(data)}
                        onError={error => console.log(error)}
                        onCancel={data => console.log(data)}
                    />
                </div>
            </div>
        </div>
    )
}

export { Payment  };