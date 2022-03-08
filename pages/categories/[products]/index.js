import { useRouter } from "next/router";
import { Fragment ,useState ,useReducer} from "react";
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col' 
import Card from 'react-bootstrap/Card'
import classes from './css/products.module.css' 
import axios from 'axios' 
import Popup from "./PopUp";



function products(props) { 
    /*get id from url*/
 const router = useRouter()
 const product_id= router.query.products  
 const cat_name = router.query.name




 const [openState,setOpen]= useState(false)
const [proID,setpro]=useState('')
  
 const togglePopup = (e) => {
   setOpen(!openState) 
    if (e.target.value)
   {
     setpro(e.target.value) 

   } else{
     router.push({
       pathname:'/categories/5/5',
       query:proID // id of item to add in cart
     })
   }
 } 

 
  return ( 
      <Fragment> 
         
         <Container style={{margin:"0"}}>
  <Row>
    <Col sm={3} className={classes.side}> 
  
        {props.catData.map((cat)=>(<div>
          <Link href={{
    pathname : `/categories/${cat.ID}`,
    query:{ name: `${cat.Name}`} 

  }}>
      <div className={classes.sideItems}>{cat.Name}
        <hr/> 
        </div>
  </Link>
       
        </div>
          ))}  
    
    </Col>
    <Col sm={9} className={classes.main}><h1>{cat_name}</h1> 
    
   <Container style={{margin:"10%"}}> 

   {props.proData.map((pro)=>( <Card className={classes.card}>
  <Card.Img variant="top" src={pro.ImagePath} />
  <Card.Body>
    <button variant="warning" className={classes.btn} onClick={togglePopup} value={pro.ID}>{pro.Name}</button>
  </Card.Body>
</Card>))}

    
</Container>
    
    </Col> 
  </Row>
  
</Container>
          
{openState && <Popup
      content={<>  
      <div className={classes.container}>  

      <Card style={{ width: '7rem' , border:'none'}}className={classes.popCart}>
  <Card.Img variant="top" src="/images/combo.png" />
  <Card.Body>
    <Card.Text >Combo</Card.Text>
      </Card.Body>
      </Card>
      <Card style={{ width: '7rem' , border:'none'}} className={classes.popCart}>
  <Card.Img variant="top" src="/images/sandicon.png" />
  <Card.Body>
    <Card.Text>Sandwich</Card.Text>
      </Card.Body>
      </Card>
        </div>
      </>}
      handleClose={togglePopup}
    />}


      </Fragment>
    
  )
}

export async function getStaticPaths(){
return{ 
  fallback: false ,
  paths:[{params:{products:"19"}},{params:{products:"20"}}]
}
}

export async function getStaticProps(context) {
   const catID = context.params.products 
   console.log(catID) 
   //fetch data  
   const res = await fetch("https://task-api-eosin.vercel.app/api/categories") 
   const catData = await res.json()
   const res2 =await fetch(`https://task-api-eosin.vercel.app/api/products?catID=${catID}`)
   const proData = await res2.json()
   console.log(proData)
  return {
    props:{
      catData , proData
    }
  }
}
export default products