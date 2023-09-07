import { Button, Card, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Courses() {
    const [courses, setCourses] = useState([]);
    
    useEffect(() => {
        axios
          .get("http://localhost:3000/admin/courses/", {
            headers: {
                "Authorization" : "Bearer "+ localStorage.getItem("token")
            }
          })
          .then((response) => {
            const data = response.data;
            // if (data && data.course) {
              setCourses(data.course); // Ensure you set the state correctly
            // }
          })
        //   .catch((error) => {
        //     console.error('Axios request failed:', error);
        //   });
      }, []);
    
      if(!courses.length){
        <>Loading...</>
      }

    return (
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
            {courses.map(course => {
                return <Course key={course._id} course={course} />}
            )}
        </div>
    )
}

function Course({course}) {
    const navigate = useNavigate();

    return <Card style={{
        margin: 10,
        width: 300,
        minHeight: 200,
        padding: 20
    }}>

        <Typography textAlign={"center"} variant="h5">{course.title}</Typography>
        <Typography textAlign={"center"} variant="subtitle1">{course.description}</Typography>
        <img src={course.imagelink} style={{width: 300}} ></img>

        <div style={{display: "flex", justifyContent: "center", marginTop: 20}}>
            <Button variant="contained" size= "large" onClick={() => {
                navigate("/course/" +course._id);
            }}>
                Edit
            </Button>
        </div>
    </Card>
}

export default Courses;