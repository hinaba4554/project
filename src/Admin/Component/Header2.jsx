import { blue } from '@mui/material/colors'
import React from 'react'

function Header2({ title }) {
    return (
        <div> 
            {/* Header Start */}
           
                <div className="d-inline-flex align-items-center">
                        <p className="m-0"><a  href="/">Home</a></p>
                        <i className="far fa-circle px-3" />        
                        <p className="m-0" > {title}</p>
                    </div>
                  
            {/* Header End */}
        </div>
    )
}

export default Header2