import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import Card from '@mui/material/Card';

const AddCourse = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");

 
  return (

    <div>
        <div style={{paddingTop: 100, 
                        paddingBottom: 15,
                        display: "flex",
                        justifyContent: "center" 
            }}>
    
        <Card variant="outlined" style={{width: 400, padding:20}}>  

            <TextField 
                onChange={(e) => {
                    setTitle(e.target.value)
                }}
                fullWidth={true}
                variant="outlined"
                label="Title"
            />

            <TextField 
                onChange={(e) => {
                    setDescription(e.target.value)
                }}
                fullWidth={true}
                variant="outlined"
                label="Description"
            />

            <TextField 
                onChange={(e) => {
                    setImage(e.target.value)
                }}
                fullWidth={true}
                variant="outlined"
                label="Image Link"
            />
            <TextField 
                onChange={(e) => {
                    setPrice(e.target.value)
                }}
                fullWidth={true}
                variant="outlined"
                label="Price"
            />

            <Button 
                variant='contained'
                size={"large"}
                onClick={() => {
                    fetch('http://localhost:3000/admin/addcourse', {
                        method:"POST",
                        body: JSON.stringify({
                            title: title,
                            description: description,
                            price: price,
                            imagelink: image,
                            published: true,
                        }),
                        headers:{
                            "Content-type" : "application/json",
                            "Authorization" : "Bearer "+ localStorage.getItem("token")
                        }
                    }).then((res) => {
                        res.json().then((data) => {
                            // console.log(data.token);
                            alert("Course Added")
                        })
                    })
                }}
            >
                Add Course
            </Button>
        </Card>
        </div>
    </div>
  )
}

export default AddCourse