import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {listProducts} from './actions/productAction'
import {Row, Col} from 'react-bootstrap'
import Product from './Product'
import Message from './Message'
import Loader from './Loader'
import Paginate from './Paginate'
import ProductCarousel from './ProductCarousel'

const Home = ({match}) => {
  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])
 
  return (
    <>
      {!keyword && <ProductCarousel /> }
       <h1 >LATEST PRODUCTS</h1>
       {loading 
       ? (<Loader />)
       : error
       ? (<Message variant='danger'>{error}</Message> )
       : ( 
         <>
        <Row>
        {
          products.map((product) => (
            <Col key={product._id} sm={12} md={4} lg={4}>
              <Product product={product} />
            </Col>
          ))
        }
      </Row>
          <Paginate pages={pages} page={page} keyword={keyword ? keyword: ''} />
        </>
       )
      }
       
    </>
  )
}

export default Home
