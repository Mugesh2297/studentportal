import './App.css';
import Login from './Components/Login';
import "./vendor/fontawesome-free/css/all.min.css";
import "./css/sb-admin-2.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './Components/Dashboard';
import Buttons from './Components/Buttons';
import Cards from './Components/Cards';
import Colors from './Components/Colors';
import Borders from './Components/Borders';
import Animations from './Components/Animations';
import Other from './Components/Other';
import Tables from './Components/Tables';
import Charts from './Components/Charts';
import Register from './Components/Register';
import ForgetPass from './Components/ForgetPass';
import Page404 from './Components/404page';
import Blankpage from './Components/Blankpage';
import Student from './Components/Student';
import Teacher from './Components/Teacher';
import CreateStudent from './Components/CreateStudent'
import Studentview from './Components/Studentview';
import CreateTeacher from './Components/CreateTeacher';
import TeacherView from './Components/TeacherView';
import Editstudent from './Components/Editstudent'
import EditTeacher from './Components/EditTeacher';



function App() {
  return (
  <div>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/button" element={<Buttons/>} />
    <Route path="/cards" element={<Cards/>} />
    <Route path="/colors" element={<Colors/>} />
    <Route path="/borders" element={<Borders/>} />
    <Route path="/animations" element={<Animations/>} />
    <Route path="/other" element={<Other/>} />
    <Route path="/tables" element={<Tables/>} />
    <Route path="/charts" element={<Charts/>} />
    <Route path="/register" element={<Register/>} />
    <Route path="/forgotpass" element={<ForgetPass/>} />
    <Route path="/404page" element={<Page404/>} />
    <Route path="/blankpage" element={<Blankpage/>} />
    <Route path="/student" element={<Student/>}/>
    <Route path='student/:productid' element={<Studentview/>}/>
    <Route path='student/editstudent/:id' element={<Editstudent />} />
    <Route path="/create-student" element={<CreateStudent/>}/>
    <Route path="/teacher" element={<Teacher/>} />
    <Route path="/create-teacher" element={<CreateTeacher/>}/>
    <Route path='teacher/:userid' element={<TeacherView/>}/>
    <Route path='teacher/editteacher/:id'element={<EditTeacher />} />
    </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
