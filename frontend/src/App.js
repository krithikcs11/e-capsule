import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ProductDescription from './ProductDescription'
import Cart from './Cart'
import UserLogin from './UserLogin'
import Register from './Register'
import Profile from './Profile'
import Shipping from './Shipping'
import Payment from './PaymentScreen'
import PlaceOrder from './PlaceOrder'
import Orders from './Orders'
import UserListScreen from './UserListScreen'
import UserEditScreen from './UserEditScreen'
import ProductListScreen from './ProductListScreen'
import ProductEditScreen from './ProductEditScreen'
import OrderListScreen from './OrderListScreen'


const App = () => {
  return (
           <>
      <Router>
      <Header/>
      <main className='py-3'>
        <Container>
        <Route path='/order/:id' component={Orders} />
        <Route path='/shipping' component={Shipping} />
        <Route path='/payment' component={Payment} />
        <Route path='/placeOrder' component={PlaceOrder} />
        <Route path='/login' component={UserLogin} />
        <Route path='/register' component={Register} />
        <Route path='/profile' component={Profile} />
        <Route path='/product/:id' component={ProductDescription}  />
        <Route path='/cart/:id?' component={Cart}  />
        <Route path='/admin/userlist' component={UserListScreen}  />
        <Route path='/' component={Home} exact />
        <Route path='/admin/user/:id/edit' component={UserEditScreen} />
        <Route path='/admin/productlist' component={ProductListScreen} exact />
        <Route
            path='/admin/productlist/:pageNumber'
            component={ProductListScreen}
            exact
          />
        <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
        <Route path='/admin/orderlist' component={OrderListScreen} />
        <Route path='/search/:keyword' component={Home} exact />
        <Route path='/page/:pageNumber' component={Home}  />
        <Route
            path='/search/:keyword/page/:pageNumber'
            component={Home}
            exact
          />
       
        </Container>
      </main> 
      </Router>
      <Footer />
     
           </>
  )
}

export default App;
