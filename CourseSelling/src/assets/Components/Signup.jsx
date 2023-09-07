import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';
import axios from "axios";


const Signup = () => {

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

  return (
    <div >
            <div style={{paddingTop: 120, 
                        paddingBottom: 15,
                        display: "flex",
                        justifyContent: "center" 
            }}>
                <Typography variant={"h6"}>
                    Welcome to Coursera. Signup below
                </Typography>         
            </div>
        <div style={{display: "flex", justifyContent: "center" }}>
            <Card variant="outlined" style={{width: 400, padding:20}}>  
                    <TextField 
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        label="Email" 
                        variant="outlined"
                        fullWidth={true} />
                    <br /><br/>
                    <TextField 
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }} 
                        type='password'
                        label="Password" 
                        variant="outlined"
                        fullWidth={true} />
                    <br/> <br/>
                    <div style={{display: 'flex', justifyContent: 'center'}}>

                        <Button 
                            variant="contained" 
                            size={'large'}
                            onClick={ async () => {
                                const response = await axios.post("http://localhost:3000/admin/signup", {
                                    username: email,
                                    password: password
                                })
                                    let data = response.data;
                                    localStorage.setItem("token", data.token);
                                    window.location = "/"                
                            }}
                        >
                            SignUp</Button>        
                    </div>
            </Card>
        </div> 
    </div>
  )
}

export default Signup