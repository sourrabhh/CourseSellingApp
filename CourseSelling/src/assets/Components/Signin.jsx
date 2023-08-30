import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';

const Signin = () => {
  return (
    <div >
            <div style={{paddingTop: 120, 
                        paddingBottom: 15,
                        display: "flex",
                        justifyContent: "center" 
            }}>
                <Typography variant={"h6"}>
                    Welcome, Signin below
                </Typography>         
            </div>
        <div style={{display: "flex", justifyContent: "center" }}>
            <Card variant="outlined" style={{width: 400, padding:20}}>  
                    <TextField 
                        id="outlined-basic" 
                        label="Email" 
                        variant="outlined"
                        fullWidth={true} />
                    <br /><br/>
                    <TextField 
                        id="outlined-basic" 
                        label="Password" 
                        variant="outlined"
                        fullWidth={true} />
                    <br/> <br/>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <Button variant="contained" size={'large'} >Login</Button>        
                    </div>
            </Card>
        </div> 
    </div>
  )
}

export default Signin