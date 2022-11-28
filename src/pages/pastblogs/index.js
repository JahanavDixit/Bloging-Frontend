import {
  Link,
  Routes,
  Route,
  useParams,
} from "react-router-dom";

import {useEffect,useState} from 'react';
import Navbar from '../navbar/index';

import './index.css';

export default function PastBlogs()
{
    return(
      <Routes>
      <Route path = "/" element = {<Pastdis cond = "false"/>}/>
      <Route path="/:id" element={<Pastdis cond = "true" />}/>
      </Routes>
    );
}

function Pastdis(props)
{
  const [btnpop,setbtnpop] = useState(true);
  const {id} = useParams();
  const [arr,setarr] = useState({});
  
  // sub , blog , id , time , date 
  useEffect(()=>{
  console.log("Use Effect Called")
  const fetchdata = async (setbtnpop) =>{
   fetch('http://localhost:3001/api')
  .then(response => response.json())
  .then((data) => {setarr(data);setbtnpop(false)})
  .catch(error => console.log(error))
  }
  const timer = setTimeout(() => {
    fetchdata(setbtnpop);
  }, 5000);
  return () => clearTimeout(timer);
  },[])

  if(props.cond === "true")
  {
 if(Object.values(arr).length==0)
{ 
  const fetchdata = async (setbtnpop) =>{
   fetch('http://localhost:3001/api')
  .then(response => response.json())
  .then((data) => {setarr(data);setbtnpop(false)})
  .catch(error => console.log(error))
  }
  const timer = setTimeout(() => {
    fetchdata(setbtnpop);
  }, 5000);
  return term(timer)
}
  //const d = arr[id];
  return(
    <>
    <Popup trigger = {btnpop} />
    <Navbar/>
    <div className="wrapper">
    <div className="r1">
    <div> {arr[id].date}</div>
    <div> {arr[id].sub}</div>
    <div> {arr[id].time.substring(0,2) + " : " + arr[id].time.substring(2)}</div>
    </div>
    <div className="r2">
    <div>{arr[id].blog}</div>
    </div>
    </div>
    </>
  );
}
  else
  {
  return(
      <>
      <Popup trigger = {btnpop} /> 
      <Navbar/>
      {Object.values(arr).map(function(d, idx){
        const time =  d.time.substring(0,2) + ":" + d.time.substring(2)
         return (
          <div key={idx} className ="lists">
          <Link className="links" id={idx} to={`/pastblogs/${d._id}`}>
         <div className='blogname'>{d.sub}</div>
         <div className='blogdate'>{d.date} {time}</div>
         </Link>
         </div>)
       })}
      </> 
  );
  }
}


const Popup = (props) => {

    return (props.trigger) ? (
        <div className="popups">
        <div className = "msg">
        Please wait loading the results...
        </div>
        </div>
    ):"";    
}

const term = (timer) => {
clearTimeout(timer);
}