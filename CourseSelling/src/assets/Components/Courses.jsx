import { Card, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";


function Courses() {
    const [courses, setCourses] = useState([]);
    
    useEffect(() => {
        axios
          .get("http://localhost:3000/admin/courses", {
            headers: {
                "Authorization" : "Bearer "+ localStorage.getItem("token")
            }
          })
          .then((response) => {
            const data = response.data;
            // localStorage.setItem('token', data.token);
            if (data && data.course) {
              setCourses(data.course); // Ensure you set the state correctly
            }
          })
          .catch((error) => {
            console.error('Axios request failed:', error);
          });
      }, []);
    

    return <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
        {courses.map(course => {
            return <Course key={course.id} course={course} />}
        )}
    </div>
}

export function Course(props) {
    return <Card style={{
        margin: 10,
        width: 300,
        minHeight: 200
    }}>

        <Typography textAlign={"center"} variant="h5">{props.course.title}</Typography>
        <Typography textAlign={"center"} variant="subtitle1">{props.course.description}</Typography>
        <img src={props.course.imagelink} style={{width: 300}} ></img>
        <Typography textAlign={"center"} variant="subtitle1">{props.course.price}</Typography>

    </Card>
}

export default Courses;