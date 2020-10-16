import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from 'semantic-ui-react'
import Success from './sucess'
import { useHistory } from 'react-router-dom'
// test id
// const RAZORPAY_ID = "rzp_test_x8I5D7s72Z0kOk"
const PayByRazorPay = ({product}) => {
    const history = useHistory()
  console.log(product)
  const [userId, setUserId] = useState()
  const [response,setResponse] = useState(false)
  
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  },[]);
  
  const openCheckout=()=> {
      console.log('clicked')
      console.log(product)
        let options = {
      "key": "rzp_test_x8I5D7s72Z0kOk",
      "amount": product.price *100,
      "name": "Merchant Name",
      "description": "Purchase Description",
      "image": product.image,
      "handler": function (response){
        if(response){
            setResponse(true)
            history.push('/success')
        }
      },
      "prefill": {
        "name": "ashish",
        "email": "ashish@razorpay.com"
      },
      "notes": {
        "address": "Hello World"
      },
      "theme": {
        "color": "#F37254"
      }
    };
    
    let rzp = new window.Razorpay(options)
    rzp.open();
  }
    
  



  return (
    <>
     
      <Button primary onClick={openCheckout}>Buy</Button>

    </>
  );
  }

export default PayByRazorPay;