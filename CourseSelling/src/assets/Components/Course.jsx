import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import { Card,TextField,Button, Typography } from "@mui/material";
// import Box from '@mui/material/Box';
// import LinearProgress from '@mui/material/LinearProgress';

const Course = () => {
    const [courses, setCourses] = useState([]);
    let {courseId} = useParams()

    useEffect(() => {
        axios
          .get("http://localhost:3000/admin/courses/", {
            headers: {
                "Authorization" : "Bearer "+ localStorage.getItem("token")
            }
          })
          .then((response) => {
            const data = response.data;
            console.log(data)
            // if (data && data.courses) {
              setCourses(data); 
            //   console.log(courses+"  :: kjvhddhfkjglgl")
            // }
          })
          .catch((error) => {
            console.error('Axios request failed:', error);
          });
      }, []);

      let course = null;

      for(let i = 0; i < courses.length; i++){
        if(courses[i].id == courseId){
            course = courses[i];
            console.log(course);
        }
      }
      if(!course){
        console.log("Loading.....")
      }

  return (
    <div>
        <CourseCard course={course} />
        <UpdateCard courses={courses} course={course} setCourses={setCourses} />
    </div>
  )
}

function UpdateCard(props) {
    console.log("hi there from update card")
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const course = props.course;

    return <div style={{display: "flex", justifyContent: "center"}}>
    <Card varint={"outlined"} style={{width: 400, padding: 20}}>

    <Typography>Update course details</Typography>
    <TextField
        onChange={(e) => {
            setTitle(e.target.value)
        }}
        fullWidth={true}
        label="Title"
        variant="outlined"
    />

    <TextField
        onChange={(e) => {
            setDescription(e.target.value)
        }}
        fullWidth={true}
        label="Description"
        variant="outlined"
    />

    <TextField
        onChange={(e) => {
            setImage(e.target.value)
        }}
        fullWidth={true}
        label="Image link"
        variant="outlined"
    />

    <Button
        size={"large"}
        variant="contained"

        onClick={() => {
            axios.put("http://localhost:3000/admin/courses/"+course.id, {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            }).then((response) => {
                const data = response.data;
                let updatedCourses = [];
                for (let i = 0; i< courses.length; i++) {
                    
                    if (props.courses[i].id == course.id) {
                        updatedCourses.push({
                            id: course.id,
                            title: title,
                            description: description,
                            imageLink: image
                        })
                    } else {
                        updatedCourses.push(props.courses[i]);
                    }
                }
                props.setCourses(updatedCourses);
            })
        }}
    > Update course</Button>
    </Card>
</div>
}

function CourseCard(props) {
    // console.log("hi there from update card")
    // console.log(props.courses+"::  Props.COurses")
    const course = props.courses;
    // console.log(course+" :: bkbsdkjfbjbds")
    return <div style={{display: "flex", justifyContent: "center"}}>
     <Card style={{
        margin: 10,
        width: 300,
        minHeight: 200
    }}>

        <Typography>In the CourseCard</Typography>
        <Typography textAlign={"center"} variant="h5">{course.title}</Typography>
        <Typography textAlign={"center"} variant="subtitle1">{course?.description}</Typography>
        <img src={course?.imageLink} style={{width: 300}} ></img>
    </Card>
    </div>
}




export default Course