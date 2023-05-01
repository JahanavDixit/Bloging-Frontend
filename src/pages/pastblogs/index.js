import {
  Link,
  Routes,
  Route,
  useParams,
} from "react-router-dom";

import { useEffect, useState ,useCallback, useMemo } from 'react';

import './index.css';

export default function PastBlogs() {
  const [btnpop, setbtnpop] = useState(true);
  const [arr, setarr] = useState({});

   const fetchData = useCallback(async () => {
    try {
      const response = await fetch('https://blogs-backend-4peo.onrender.com/api');
      const data = await response.json();
      setarr(data);
      setbtnpop(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    console.log("Use Effect Called")
      const timer = setTimeout(() => {
      fetchData();
    },);
    return () => clearTimeout(timer);
  }, [fetchData])

  useEffect(() => {
  }, [arr]);

  const PastdisMemo = useMemo(() => {
    return <Pastdis btnpop={btnpop} arr={arr} />;
  }, [btnpop, arr]);

  return (
    <Routes>
      <Route path="/" element={PastdisMemo} />
      <Route path="/:id" element={<ForId btnpop={btnpop} arr={arr} />} />
    </Routes>
  );
}

function Pastdis(props) {
  const arr = useState(props.arr);
  const { id } = useParams(); 
  return (
	<>
      <Popup trigger={props.btnpop} />
      {Object.values(props.arr).map(function (d, idx) {
        const time = d.time?.substring(0, 2) + ":" + d.time?.substring(2);
        return (
          <div key={idx} className="lists">
            <Link className="links" id={idx} to={`/pastblogs/${d._id}`}>
              <div className="blogname">{d.sub}</div>
              <div className="blogdate">{d.date} {time}</div>
            </Link>
          </div>
        );
      })}
    </>
  );
}

const ForId = (props) => {
  const { id } = useParams();
  const [arr, setarr] = useState(props.arr);

   return(
    <>
    <Popup trigger = {props.btnpop} />
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

const Popup = (props) => {

  return (props.trigger) ? (
    <div className="popups">
      <div className="msg">
        Please wait loading the results...
      </div>
    </div>
  ) : "";
}

const term = (timer) => {
  clearTimeout(timer);
}