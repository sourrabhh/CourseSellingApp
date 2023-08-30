import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';

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
                            onClick={() => {
                                fetch( 'http://localhost:3000/admin/signup',{
                                    method: "POST",
                                    body: JSON.stringify({
                                        username: email,
                                        password: password
                                    }),
                                    headers:{
                                        "Content-type" : "application/json"
                                    }
                                }).then((res) => {
                                    res.json().then((data)=> {
                                        localStorage.setItem("token", data.token);
                                        console.log(data.token);
                                    })
                                })
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