import './App.css'
import EmployeeList from './components/EmployeeList'
import Footer from './components/Footer'
import InsertEmployee from './components/InsertEmployee'
import Navbar from './components/navbar'
import {BrowserRouter as Router, Routes , Route} from "react-router-dom";
import ShowEmployeeDetail from './components/ShowEmployeeDetails'
import UpdateEmployee from './components/UpdateEmployee'


function App() {
 
  return (
    <div>
   <Router>
    <Navbar/>
    <Routes>
    <Route path="/" element= {<EmployeeList/>}/>
    <Route path="/insert" element= {<InsertEmployee/>}/>
    <Route path="/showdetails/:id" element= {<ShowEmployeeDetail/>}/>
    <Route path="/updatedetails/:id" element= {<UpdateEmployee/>}/>
    
    </Routes>
    <Footer/>
   </Router>
    </div>
  )
}

export default App
