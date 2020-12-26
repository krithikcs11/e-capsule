import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from './FormContainer'
import CheckoutSteps from './CheckoutSteps'
import { savePaymentMethod} from './actions/cartAction'


const Payment = ({ history }) => {
     const cart = useSelector(state => state.cart)
     const dispatch = useDispatch()
     const { shippingAddress} = cart

     if(!shippingAddress) {
         history.push('./shipping')
     }

     const[paymentMethod, setPaymentMethod] = useState('PayPal')

    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)
   
  

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        history.push('./placeorder')
    }

    return (
        <FormContainer>
            <CheckoutSteps step1 step2 step3 />

           <h1>Payment Method</h1>
           <Form onSubmit={submitHandler} >

           <Form.Group >
             <Form.Label as='Legend' >Select Mehtod</Form.Label>
          
            <Col>
               <Form.Check 
               type='radio'
               label='PayPal or Credit Card'
               id='PayPal'
               name='paymentMethod'
               value='PayPal'
               checked
               onChange={ (e) => setPaymentMethod(e.target.value)}

               >
                </Form.Check>

                <Form.Check 
               type='radio'
               label='Stripe'
               id='Stripe'
               name='paymentMethod'
               value='Stripe'
               onChange={ (e) => setPaymentMethod(e.target.value)}

               >
                </Form.Check>
            </Col>

            </Form.Group>
            
            <Button type='submit' variant='primary'>
              continue
            </Button>
            </Form>
        </FormContainer>
    )
}

export default Payment
