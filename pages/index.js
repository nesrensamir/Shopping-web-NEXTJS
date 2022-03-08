import {useRouter} from 'next/router'
import {Fragment} from 'react' 
import Link from 'next/link'
import Layout from '../components/layout'

function index() {
  return (
    <Fragment>
      
        <h1>MAIN PAGE</h1>  
           <ul>
               <li>STORY</li>
               <li><Link href="/categories">FOOD</Link></li>
               <li>LOCATION</li>
           </ul>  
      
    </Fragment> 
  )
}

export default index