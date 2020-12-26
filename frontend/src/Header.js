import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { Link} from 'react-router-dom'
import {Route} from 'react-router-dom'
import  { LinkContainer} from 'react-router-bootstrap'
import { logout } from './actions/userAction'
import SearchBox from './SearchBox'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)

  const { userInfo } = userLogin

  const logoutHandler = () => {
     dispatch(logout())
  }

  return (
    <header>
     
      <Navbar className='p-3' bg="dark" variant='dark' expand="lg" collapseOnSelect >
        <Container>
        <Link to='/'>
          <Navbar.Brand >E-Capsule</Navbar.Brand>
          </Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
         <Route render={({history}) => ( <SearchBox history={history} />)} />
    <Nav className="ml-auto">
      <LinkContainer to='/cart'>
      <Nav.Link ><i className='fas fa-shopping-cart'></i>CART</Nav.Link>
      </LinkContainer>
      {userInfo ? (
        <NavDropdown title={userInfo.name} id='username' >
          <LinkContainer to='/profile'>
            <NavDropdown.Item>Profile</NavDropdown.Item>
          </LinkContainer>
          <NavDropdown.Item onClick={logoutHandler} >
            Logout
          </NavDropdown.Item>
        </NavDropdown>
      ): <LinkContainer to='/login'>
      <Nav.Link ><i className='fas fa-user'></i>SIGN IN</Nav.Link>
      </LinkContainer>
       }
      {userInfo && userInfo.isAdmin && (
        <NavDropdown title='Admin' id='username' >
        <LinkContainer to='/admin/userlist'>
          <NavDropdown.Item>Users</NavDropdown.Item>
        </LinkContainer>
        <LinkContainer to='/admin/productlist'>
          <NavDropdown.Item>Products</NavDropdown.Item>
        </LinkContainer>
        <LinkContainer to='/admin/orderlist'>
          <NavDropdown.Item>Orders</NavDropdown.Item>
        </LinkContainer>
      </NavDropdown>
      )}
    </Nav>
    
  </Navbar.Collapse>
  </Container>
  
</Navbar>
    </header>
  )
}

export default Header
  