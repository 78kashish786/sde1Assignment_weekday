import React ,{useState, useEffect} from 'react'
import JobCard from './JobCard';

function Main() {


    const [jobData,setJobData]=useState([]);
    const [page, setPage]= useState(1);

    const fetchDataFunction = ()=>{
      const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  const body = JSON.stringify({
   "limit": 10,
   "offset": 0
  });
  
  const requestOptions = {
   method: "POST",
   headers: myHeaders,
   body
  };
  
  fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
   .then((response) => response.json())
   .then((result) => setJobData(result?.jdList))
   .catch((error) => console.error(error));
    }
  
  
    useEffect(()=>{
      fetchDataFunction();
    },[])

    const handleScrollForData = ()=>{
        console.log("scroll:", document.documentElement.scrollHeight);
        setPage(prev=>prev+1);
        console.log(page);
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleScrollForData);

        return()=>{
            window.removeEventListener("scroll",handleScrollForData);
        }
    },[page])
  
    console.log(jobData);
  return (
    <div className='p-5 flex flex-wrap justify-between '>
        {
            jobData.map((item,index)=>(
                <JobCard data={item}/>
            ))
        }
    </div>
  )
}

export default Main
