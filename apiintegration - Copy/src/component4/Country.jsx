import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CountryData } from '../component1/store/Thunk/Countrythunk';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

function Country() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const data = useSelector((state) => state?.Country?.countrysdata);
    console.log("country State:", data);
    
   
    
    useEffect(()=>{
        dispatch(CountryData());
    },[dispatch])

 
  return (
    <div>
    <Button variant="outlined" className='buttons' onClick={()=>navigate("/")} style={{marginBottom:"20px"}}>Next</Button><br></br>
      {/* <h1>{loading}</h1> */}
      {data?.map((item, index) => (
     <h1 key={index}>{item.altSpellings}</h1>  
))}

    </div>
  )
}

export default Country