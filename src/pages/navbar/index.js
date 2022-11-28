import {Link} from "react-router-dom";
import './index.css';
export default function Navbar()
{
  return(
  	<div className='titleb'> 
        <Link className = 'tblog' to = "/" > Blogs <i>For</i> <span>Thought.</span> </Link>
        <div className='nav'>
        <Link className='ln1' to = "/blogs"> Create New Blog </Link>
        <Link className='ln2' to = "/pastblogs"> My Past Blogs </Link>
        </div>
        </div>
  );

}