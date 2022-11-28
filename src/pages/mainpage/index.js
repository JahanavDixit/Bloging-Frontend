import './index.css';
import Navbar from '../navbar/index';
import {Link} from "react-router-dom";

export default function MainPage()
{

    return(
        <>
        <div className = "main">
	<Navbar/>
	<div className= "gbox">
	<div>
        <span className='t1'> 
        Greetings ! Welcome to, 
        </span><br/>
        <span className='title'>Jahanav's Blog.</span>
	</div>
        </div> 
        </div>
        </>
    );
}