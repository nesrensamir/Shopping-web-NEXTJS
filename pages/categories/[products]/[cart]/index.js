import { useRouter } from "next/router";
import { Fragment,useReducer } from "react";
import Link from 'next/link' 
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/button'
import Stack from 'react-bootstrap/Stack' 
import classes from './css/cart.module.css'
//reducer 
const initialState = {
  counter :1,
  price:10

}
const reducer = (state,action)=>{
  switch (action.type) {
   case '+':
     return {counter : state.counter+1 , price : state.price+action.oneprice }
    case '-':
      return {counter : state.counter-1, price : state.price-action.oneprice}
    case 'reset':
      return{couter:0 , price:0}  
    default :
    return {counter : state.counter , price: state.price}  
  }

}
function cart() { 
    /*get id from url*/
 const router = useRouter()
 const cart_id= router.query 
 const [count,dispatch]= useReducer(reducer, initialState)
 const handleShopping=()=>{
   // routing to menu 
   router.push({
     pathname:'/categories'
   })
 }  

 const handleChecout=()=>{
   // payment
 } 

 const handleCancel=()=>{
    //delete Cart
    dispatch({type:'reset'})
 }


 return ( 
     <Fragment>  
       <div className={classes.container}>
       <h1 className={classes.h1}> ORDER NOW</h1>
        
        
          <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Item</th>
      <th>Quantity</th>
      <th>Total Price</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td className={classes.td}>first item</td>
      <td> <Button variant="warning" className={classes.ch} onClick={()=>dispatch({type:'-',oneprice:10})}>-</Button>{count.counter}<Button variant="warning"className={classes.ch} onClick={()=>dispatch({type:'+',oneprice:10})}>+</Button>{' '}</td>
      <td className={classes.td}>{count.price} LE</td>
      
    </tr>
   
   
  </tbody>
</Table> 
<Stack gap={2} className="col-md-5 mx-auto">
<Button variant="success" className={classes.btn} onClick={handleShopping}>Continue shopping</Button>{' '}
<Button variant="warning" className={classes.btn} onClick={handleChecout}>ChecK OUT</Button>
  <Button variant="danger" className={classes.btn} onClick={handleCancel}>Cancel Order</Button>    
  </Stack> 
  </div>
     </Fragment>
   
  )
}



export default cart