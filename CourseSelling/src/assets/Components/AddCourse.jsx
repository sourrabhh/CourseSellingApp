import { Button, TextField } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';

const AddCourse = () => {
  return (
    <div>
    
        <Card variant="outlined" style={{width: 400, padding:20}}>  

            <TextField 
                onChange={() => {

                }}
                fullWidth={true}
                variant="outlined"
                label="Title"
            />

            <TextField 
                onChange={() => {

                }}
                fullWidth={true}
                variant="outlined"
                label="Subject"
            />

            <TextField 
                onChange={() => {

                }}
                fullWidth={true}
                variant="outlined"
                label="Description"
            />

            <Button 
                variant='contained'
                size={"large"}
                onClick={() => {

                }}
            >
                Add Course
            </Button>
        </Card>
    </div>
  )
}

export default AddCourse