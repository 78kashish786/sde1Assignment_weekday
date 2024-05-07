
import { useDispatch, useSelector } from 'react-redux';
import { setLocationFilter, setRoleFilter,setMinimumExperience } from '../filterSlice.js';

import JobCard from './JobCard';

import React, { useState, useEffect, useMemo } from 'react';

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
// Commmon function
export function extraUniqueValues(datas,key){
  return [...new Set(datas.map(item=>item[key]))]
}

function Main() {

  const dispatch= useDispatch();
  const {location, role, experience} = useSelector(state=>state.filters);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  

  useEffect(() => {
    setLoading(true);
    fetchData(1, offset)
      .then(newData => {
        setData(prevData => [...prevData, ...newData.jdList]);
        setOffset(prevOffset => prevOffset + 10); 
        // updateFilterOptions(newData);
        setLoading(false);
      })
      .catch(error => console.error(error));
  }, [offset]);
  // setAllLocations(Array.from(new Set(data.map(item=>item.location))))
  var allLocations=useMemo(()=>extraUniqueValues(data,'location'),[data]);
   var allRoles= useMemo(()=>extraUniqueValues(data,'jobRole'),[data]);
   var allExperiences=  useMemo(()=>extraUniqueValues(data,'minExp',[data]));
  

  const handleLocationChange =(e)=>{
    console.log(e.target.value);
    dispatch(setLocationFilter(e.target.value));

  }
  const handleRoleChange = (e)=>{
    dispatch(setRoleFilter(e.target.value));
  }

  const handleExperienceChange = (e)=>{
    dispatch( setMinimumExperience(e.target.value));
  }
 
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

  const filteredData = data.filter(job => {
    return (
      (location === '' || job.location === location) &&
      (role === '' || job.jobRole === role)&&
      (experience=== '' || job.minExp >= experience)
    );
  });

  // setData(filteredData);
  // console.log(filteredData);

  // console.log("Roles",newData);
  // console.log("Locations",allLocations);
  
  return (
    <>
    <div className=' flex gap-4 px-5 py-2'>
        {/* <DropDownComp/> */}
        <label className=' flex-col'>
          <h1 className='text-[12px] font-semibold'>Location</h1>
          <select className='border p-2 px-4 outline-blue rounded-sm' value={location} onChange={handleLocationChange}>
            <option value="">All Locations</option>
            {allLocations.map((item, index) => (
              <option key={index} value={item} >{item}</option>
            ))}
          </select>
        </label>
        <label className=''>
        <h1 className='text-[12px] font-semibold'>Experience</h1>
          <select className='border p-2 px-4 outline-blue' value={experience} onChange={handleExperienceChange}>
            <option value="">0</option>
            {allExperiences.map((item, index) => (
              <option  key={index} value={item}>{item}</option>
            ))}
          </select>
        </label>
        <label className=''>
        <h1 className='text-[12px] font-semibold'>Role</h1>
          <select className='border p-2 px-4 outline-blue' value={role} onChange={handleRoleChange}>
            <option value="">All Roles</option>
            {allRoles.map((role, index) => (
              <option  key={index} value={role}>{role}</option>
            ))}
          </select>
        </label>
       
        
   
    </div>

    <div className='flex justify-between flex-wrap '>
      {
        filteredData.length>0 ? <>{filteredData.map((item, index) => (
          <div key={index}>
            <JobCard data={item}/>
          </div>
        ))}
        </> :
        <>
        {data.map((item, index) => (
        <div key={index}>
          <JobCard data={item}/>
        </div>
      ))}
        </>
      }
      {loading && <div>Loading...</div>}
    </div>
    </>
  );
}export default Main;