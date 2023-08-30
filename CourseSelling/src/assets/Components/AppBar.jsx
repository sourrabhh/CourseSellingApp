import { Button, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';


const AppBar = () => {

    const navigate = useNavigate();

  return (
    <div style={{display: 'flex',
                justifyContent: 'space-between',
                paddingTop: 10}}>

        <div style={{paddingLeft: 10}}>
            <Typography variant='h4'>Coursera</Typography>
        </div>
        <div style={{display: "flex"}}>
            <div style={{marginRight: 10}}>
                <Button variant='contained'
                    onClick={() => {
                        navigate("/signup")
                    }} 
                >
                    SignUp 
                </Button>
            </div>
            <div style={{marginRight: 10}}>
                <Button variant='contained'
                    onClick={() => {
                        navigate("/login");
                    }}
                > 
                    SignIn
                </Button>
            </div>
        </div>
    </div>
  )
}

export default AppBar