import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Signup from './assets/Components/Signup'
import AppBar from './assets/Components/AppBar'
import Signin from './assets/Components/Signin'
import AddCourse from './assets/Components/AddCourse'

function App() {

  return (
    
      <div style={{width: "100vw", height:"100vh", backgroundColor:"#eeeeee" }}>
        
        
        <Router>
          <AppBar />
          <Routes>

            <Route path='/' element= { <Signin/> } />
            <Route path='/signup' element= {<Signup />} /> 
            <Route path='/login' element= { <Signin /> }  />
            <Route path='/addcourse' element= { <AddCourse /> } />

          </Routes>
        </Router>
        
      </div>

  )
}

export default App
