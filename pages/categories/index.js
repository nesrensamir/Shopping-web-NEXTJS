import { Fragment ,useEffect, useState} from "react"
import Link from 'next/link'
import Card from 'react-bootstrap/Card' 
import Button from 'react-bootstrap/Button'
import classes from './css/categories.module.css'
import axios from 'axios'
function categories(props) { 
   

    return (
        <Fragment>
         <div className={classes.main} >
            <div className={classes.container}> 
    
    

            {props.catData.map((cat)=>(
    
<Card className={classes.card}>
<Card.Img variant="top" src={cat.ImagePath} />
<Card.Body> 
  <Link href={{
    pathname : `/categories/${cat.ID}`,
   query:{ name: `${cat.Name}`}
  }}>
  <button variant="warning" className={classes.btn}>{cat.Name}</button>
  </Link>
</Card.Body>
</Card>
                

            ))}
        

            </div> 
      </div>
        </Fragment>
      
    )
  } 
  // excute this function during pre-rendering process
  export async function getStaticProps() { 
    const res = await fetch("https://task-api-eosin.vercel.app/api/categories") 
    const catData = await res.json()
    return{
      props:{
         catData 
      }
    }
  }
  
  export default categories