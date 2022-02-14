import React from 'react';
import './Body.css';
import { useState,useEffect } from 'react';
import Axios from 'axios';


function Body() {
  const [items,setitems]=useState([])
  const [searchTerm,setSearchTerm]=useState([])
  var [filteredData,setfilteredData]=useState([])
  useEffect(()=>{
    Axios.get("http://localhost:3001/search")
    .then((response)=>setitems(response.data))
    .catch((err)=>console.log(err))
  },[])

  function filter(){
    alert('testing...')
    filteredData=[]
    items.filter((val)=>{
        if (searchTerm===""){
          setfilteredData([])
          return
        }
        else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())){
          setfilteredData([...filteredData,val])
        }
      })
  }
  console.log(filteredData);

  return (
    <>
    <div className="body">
        <div className="content">
        <input type="text" placeholder="Search your Item"
          onChange={(event)=>{setSearchTerm(event.target.value)}}
        />
        <div className='button'><button onClick={filter}  >Search</button></div>
        </div>
    </div>

    {/* displaying the result */}
    
    <div className="result">
      {
        filteredData.map((data,index)=>{
          return(
            <div className="post" key={index}>
              <h3>{data.title}</h3>
              <p> <a href={data.link} target="_blank">{data.link}</a> </p>
            </div>
          )
        })
        
      }
    </div>
    </>
  )
}


export default Body;

// made by Abhishek Dash