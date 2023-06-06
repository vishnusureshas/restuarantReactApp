import React,{ useState,useEffect } from 'react'
import RestuarantCard from './RestuarantCard'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import  {RestuarantlistAction} from '../Actions/restuarantListAction'
import { useDispatch, useSelector } from 'react-redux';



function Restuarantlist() {
   // create state to hold all restuarant
  //  const [allRestuarants,setRestuarant] = useState([])

   // function to call api to get all restuarant.json
   
  //  const getRestuarant = async () => {
  //       await fetch('/restaurants.json')
  //       .then((data)=>{
  //         data.json()
  //         .then((result)=>{
  //           setRestuarant(result.restaurants)
  //         })
  //       })
  //  }
  //  console.log(allRestuarants)
  const dispatch = useDispatch()
  const result = useSelector(state=>state.restuarantReducer)
  const {restuarantList} = result

   useEffect(()=>{
    // getRestuarant()
    dispatch( RestuarantlistAction())
   },[])

  return (
    <Row>
        {
            restuarantList.map(item=>(
             <Col sm={12} md={8} lg={6} xl={3}>
             <RestuarantCard restuarant={item}/>
             </Col>
            ))
        }
    </Row>
  )
}

export default Restuarantlist