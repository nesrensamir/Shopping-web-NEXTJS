
import {Fragment} from 'react' 
import Link from 'next/link'
import {useRouter} from 'next/router'
import Button from 'react-bootstrap/Button'
import classes from './css/MainNavigation.module.css' 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faShoppingBag,faUser,faEarthAfrica} from "@fortawesome/free-solid-svg-icons"
function Layout(props) { 
const router = useRouter()
const hundleOrder =()=>{ 
    /* router.push('path'+dynamic arg) = using <Link> */
  
} 
const handleCartOpen =()=>{
  console.log("hello cart")
  router.push({
    pathname:'/categories/5/5'
  })
}
    
  return (
    <Fragment> 
 <header className={classes.header}>
      <img alt=""
             src="/images/texas.png"
             width="10%"
             height="80%"
              />
      <nav>
        <ul>
          <li>
            <Link href=''>STORY</Link>
          </li>
          <li>
            <Link href='/categories'>FOOD</Link>
          </li> 

          <li>
              <Link href=''>LOCATION</Link>
          </li> 
          <li>
          <Button variant="warning" className={classes.btnOrder} onClick={hundleOrder}>ORDER NOW</Button>
          </li>
          
          <li> 
              <ul> 
                  <li className={classes.icons}>
          <FontAwesomeIcon
        icon={faUser}
        style={{ fontSize: 15, color: "#f8b02d" }}
          />  </li>
            <li className={classes.icons}>
          <FontAwesomeIcon
        icon={faShoppingBag}
        style={{ fontSize: 20, color: "#f8b02d" }}
        onClick={handleCartOpen}
          />  </li> 

          <li className={classes.icons}>
          <FontAwesomeIcon
        icon={faEarthAfrica}
        style={{ fontSize: 15, color: "#f8b02d" }}
          />  </li>

          </ul>
          </li>
        </ul> 

        
      </nav>
    </header>
     


      
     <main className={classes.main}>{props.children}</main> 


     <footer className={classes.footer}>


     </footer>
     </Fragment>
  )
}

export default Layout