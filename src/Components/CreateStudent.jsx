import { useFormik } from 'formik'
import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

function CreateStudent() {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      email: "",
      address: "",
      
    },
    validate: (values)=>{
      let errors = {};
      if (values.name === "") {
        errors.name = "Please Enter Student  Name"
      }
      if (values.age === "") {
        errors.age = "Please Enter Age"
      }
      if (values.email === "") {
        errors.email = "Please Enter Email"
      }
      if (values.address === "") {
        errors.address = "Please Enter Address"
      }
     
      
    },
    onSubmit: async (values) => {
      let user = await axios.post("https://6322a4b3362b0d4e7dd04cfa.mockapi.io/student",values);
      alert("Student Created")
      navigate('/student')
    }
  })
  return (
    <div id="wrapper">

    {/* <!-- Sidebar --> */}
    <Sidebar />
    {/* <!-- End of Sidebar --> */}

    {/* <!-- Content Wrapper --> */}
    <div id="content-wrapper" class="d-flex flex-column">

        {/* <!-- Main Content --> */}
        <div id="content">

            {/* <!-- Topbar --> */}
            <Topbar />
    <div className='container'>
      <form onSubmit={formik.handleSubmit}>
        <div className='row'>

          <div className='col-lg-6 p-2 mx-auto'>
            <lable >Student Name</lable>
            <input className='form-control' type={"text"} placeholder="Enter User Name" 
            value={formik.values.name} onChange={formik.handleChange}
            name="name"></input>
            <span style={{color:'red'}}>{formik.errors.name}</span>
            </div>
          
            <div className='col-lg-6 p-2 mx-auto'>
            <lable>Age</lable>
            <input className='form-control' type={"text"} placeholder="Enter Age"
            value={formik.values.age} onChange={formik.handleChange}
            name="age"></input>
            <span style={{color:'red'}}>{formik.errors.age}</span>
            </div>

         
            <div className='col-lg-6 p-2 mx-auto'>
            <lable>Email</lable>
            <input className='form-control' type={"email"} placeholder="Enter Email ID"
            value={formik.values.manufacturer} onChange={formik.handleChange}
            name="email" ></input>
            <span style={{color:'red'}}>{formik.errors.email}</span>
            </div>
       
            <div className='col-lg-6 p-2 mx-auto'>
            <lable>Address</lable>
            <input className='form-control' type={"text"} placeholder="Enter Address"
            value={formik.values.address} onChange={formik.handleChange}
            name="address"></input>
            <span style={{color:'red'}}>{formik.errors.address}</span>
            </div>
           
         
          
          
         
            <div className='col-lg-12 p-2 mx-auto'>
            <input className='btn btn-primary mt-2 ' type={"submit"} value="Submit" disabled={!formik.isValid}></input>
            </div>

        </div>
      </form>


    </div>
    </div>
    </div>
    </div>
    


  )
}

export default CreateStudent