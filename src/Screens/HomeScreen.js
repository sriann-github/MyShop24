import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Product from '../components/Product'
//import SampleCmp from '../components/SampleCmp'
import { Col, Row } from 'react-bootstrap'
import errorMessage from './components/errorMessage'
import Loader from '../components/Loader'
import { listProducts } from '../actions/productActions'

const HomeScreen = () => {

  const dispatch = useDispatch()
  //No longer need the local state after implementing redux
  // const [products, setProducts] = useState([])

  useEffect( () => {

    //Homescreen is not going to directly call the api in the redux flow, Action will take care of it.
    /*
    const fetchProducts = async () =>{
      const {data} = await axios.get('/api/products')
      //curly bracket in the above statement is the deconstructing statement, it extracts the data property from the response
      setProducts(data)
    }

    fetchProducts() */
    dispatch(listProducts())
  },[dispatch])

  //useSelector is used to extract data from the redux store
  const productList = useSelector((state) => state.productList )
  const {loading, products, error} = productList
  
  return (
    <>
      <h1>Latest Products</h1>        
          {
            loading? (<Loader />):
            error? (<errorMessage variant='danger'> {error} </errorMessage>) : 
            (              
              <Row>
               {products.map( p => (
                <Col sm={12} md={6} lg={4} xl={3}>
                  <Product prd={p} />
                </Col>))
               }
              </Row>
            )           
          }

          // You can get the products either by reading it from a static js file or with the api call through axios.
          //If reading from a static file, use useParams hook
    </>         
        
  )
}

export default HomeScreen

