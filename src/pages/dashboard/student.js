import React, { useEffect, useState } from 'react';
import Logout from '../../components/logout/Logout';
import "./student.css"


const StudentPage = () => {
  const [activityLog, setActivityLog] = useState([]);
  const [check,setCheck] = useState(false)
  

  useEffect(() => {
     
        let activityLog = JSON.parse(localStorage.getItem("activitylog"))
        if(activityLog){
            setActivityLog([...activityLog]);
        }
        console.log(activityLog)
      
  },[]);
  
  

  return (<>
    <div className='student-page'>
      <div className='student-container'>
      <h1>Student Page</h1>
      <div className='calculations'>
        <h2>Activity Log </h2>
        <ul>
          {activityLog.map((activityLog) => (
            <div key={Math.random()*10}><span>•</span> {activityLog.input}{ check && <div><span>Answer:</span>:{activityLog.output}</div>}</div>
          ))}

        </ul>
        <button onClick={()=>{setCheck(!check)}}>check</button>
      </div>
      
      

      </div>
      <div className="logout-css">
      <Logout />

      </div>

      
    </div>
    </>

  );
};

export default StudentPage;
