import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


const AppBar = () => {

    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState(null);

    useEffect( () => {
        fetch("http://localhost:3000/admin/me", {
            method: "GET",
            headers: {
                "Authorization" : "Bearer "+localStorage.getItem("token")
            }
        }).then( (res) => {
            res.json().then((data) => {
                 if(data.username){
                    setUserEmail(data.username);
                }
                console.log(data)
            } )
        })
    }, []);

    if(userEmail){
        return(
                <div style={{display: 'flex',
                    justifyContent: 'space-between',
                    paddingTop: 10}}>

            <div style={{paddingLeft: 10}}>
                <Typography variant='h4'>Coursera</Typography>
            </div>
            <div style={{display: "flex"}}>
                <div>
                    {userEmail}
                </div>
                <div style={{marginRight: 10}}>
                    <Button
                        onClick={() => {
                            navigate("/courses");
                        }}
                    > 
                        Courses
                    </Button>
                </div>
                <div style={{marginRight: 10}}>
                    <Button
                        onClick={() => {
                            navigate("/addcourse");
                        }}
                    > 
                        Add Course
                    </Button>
                </div>

                <div style={{marginRight: 10}}>
                    <Button variant='contained'
                        onClick={() => {
                            // window.location.reload(true)
                            window.location = "/signup"
                            localStorage.setItem("token", null)
                            // navigate("/signup")
                        }} 
                    >
                        Logout 
                    </Button>
                </div>
                
            </div>
        </div>
        )
    }

    else{
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
  
}

export default AppBar