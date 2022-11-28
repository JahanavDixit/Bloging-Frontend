import React from 'react';
import { Link } from 'react-router-dom';
import "./index.css";

import { useState } from 'react';



const handlesub = () =>{

    const bl = {'subject': document.getElementById("sub").value,
    'content':document.getElementById("texta").value}
    let date = new Date();
    date = date.toISOString().slice(0,10);   
    let time = new Date().getHours()
    time = time*100
    time = time + new Date().getMinutes()

    const data = {'content' : bl,'date' : date, 'time' : time};

    fetch('/api',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
        body : JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
  console.log('Success:', data);
    })

}

export default function BlogPage()
{
    const [btnpop,setbtnpop] = useState(false);
    let clr = document.getElementById("clear");
    return(
        <>
        <div className='titleb'> 
        <Link className = 'tblog' to = "/" > Blogs <i>For</i> <span>Thought.</span> </Link>
        <div className='buttonsb'>
        <button onClick={()=>{ handlesub(); setbtnpop(true);setTimeout(()=>{setbtnpop(false);clr.click()},2000);}} className ='btns'>Submit</button>
        <button onClick={()=>{document.getElementById("texta").value = "";document.getElementById("sub").value="";}} className = 'btns' id = "clear">Clear</button>
        </div>
        <textarea autoCorrect="off" placeholder='Enter Blog Subject' id='sub' className='sub'></textarea>
        </div>
        <textarea  className='texta' id='texta'
        name="textValue" placeholder = 'Type here...' rows={15} cols={65}/>
        <Popup trigger = {btnpop} />
        </>
    );
}

const Popup = (props) => {

    return (props.trigger) ? (
        <div className="popups">
        <div className = "msg">
        The Blog has been submitted 😀
        </div>
        </div>
    ):"";
    
}
