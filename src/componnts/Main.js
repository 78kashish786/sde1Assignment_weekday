
import DropDownComp from './DropDownComp';
import JobCard from './JobCard';

import React, { useState, useEffect } from 'react';

function fetchData(limit, offset) {
  // Your fetch request here
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const body = JSON.stringify({
    "limit": limit,
    "offset": offset
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body
  };

  return fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
    .then(response => response.json()
    )
    .catch(error => console.error(error));
}

function Main() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setLoading(true);
    fetchData(1, offset)
      .then(newData => {
        setData(prevData => [...prevData, ...newData.jdList]);
        setOffset(prevOffset => prevOffset + 10);
        setLoading(false);
      })
      .catch(error => console.error(error));
  }, [offset]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      // You can adjust this threshold if needed
      if (!loading) {
        setLoading(true);
        fetchData(10, offset)
          .then(newData => {
            setData(prevData => [...prevData, ...newData]);
            setOffset(prevOffset => prevOffset + 10);
            setLoading(false);
          })
          .catch(error => console.error(error));
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <div className='px-5 py-2'>
        {/* <DropDownComp/> */}
        <label className=''>
            
            <select className='border  p-2 px-4 outline-blue '>
                <option className=''>Hllo</option>
                <option>Hllo</option>
                <option>Hllo</option>
            </select>
        </label>
    </div>
    
    <div className='flex justify-between flex-wrap '>
      {data.map((item, index) => (
        <div key={index}>
          <JobCard data={item}/>
        </div>
      ))}
      {loading && <div>Loading...</div>}
    </div>
    </>
  );
}

export default Main;
