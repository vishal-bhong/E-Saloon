// PaymentComponent.js
import React from 'react';
import { getPaymentOrder } from '../../../api/CustomerApi';

const PaymentComponent = () => {
  const handlePayment = async () => {
    // const response = await fetch('http://localhost:8080/api/payment/create-order');
    // const orderData = await response.json();

    const orderData = await getPaymentOrder();

    console.log(orderData);

    const options = {
      key: 'rzp_test_ToloqmvsWNJBgl', // Enter the Key ID generated from the Dashboard
      amount: orderData.amount, // Amount in paise
      currency: 'INR',
      name: 'E - Saloon',
      description: 'Test Transaction',
      // image: 'https://your-app-logo-url', // Optional
      order_id: orderData.id, // Order ID from backend
      handler: function (response) {
        alert('Payment ID: ' + response.razorpay_payment_id);
        alert('Order ID: ' + response.razorpay_order_id);
        alert('Signature: ' + response.razorpay_signature);
      },
      prefill: {
        name: 'vishal bhong',
        email: 'vishal@example.com',
        contact: '7397974785',
      },
      notes: {
        address: 'Address note',
      },
      theme: {
        color: '#3399cc',
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div>
      <button onClick={handlePayment}>Book Appointment</button>
    </div>
  );
};

export default PaymentComponent;
