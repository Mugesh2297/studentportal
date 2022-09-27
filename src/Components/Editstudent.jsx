import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

function Editstudent() {
  const params = useParams()
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      email: "",
      address: "",


    },
    validate: (values) => {
      let errors = {};
      if (values.name === "") {
        errors.name = "Please Enter Student Name"
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
     
      return errors;
    },
    onSubmit: async (values) => {
      await axios.put(`https://6322a4b3362b0d4e7dd04cfa.mockapi.io/student/${params.id}`, values)
      alert("Student Edited");
      navigate('/student')
    }
  })

  useEffect(() => {
    loadUser()
  }, [])

  let loadUser = async () => {
    try {
      let user = await axios.get(`https://6322a4b3362b0d4e7dd04cfa.mockapi.io/student/${params.id}`);
      formik.setValues({
        name: user.data.name,
        age: user.data.age,
        email: user.data.email,
        address: user.data.address,
       
      })
    }
    catch (error) {

    }
  }
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

          <div className='col-lg-6 p-2'>
            <lable >Student Name</lable>
            <input className='form-control' type={"text"} placeholder="Enter User Name"
              value={formik.values.name} onChange={formik.handleChange}
              name="name"></input>
            <span style={{ color: 'red' }}>{formik.errors.name}</span>
          </div>
          <div className='col-lg-6  p-2'>
            <lable >Age</lable>
            <input className='form-control' type={"text"} placeholder="Enter Age"
              value={formik.values.age} onChange={formik.handleChange}
              name="age"></input>
            <span style={{ color: 'red' }}>{formik.errors.age}</span>

          </div>
          <div className='col-lg-6  p-2'>
            <lable >Email</lable>
            <input className='form-control' type={"text"} placeholder="Enter Email"
              value={formik.values.email} onChange={formik.handleChange}
              name="email"></input>
            <span style={{ color: 'red' }}>{formik.errors.email}</span>
          </div>
          <div className='col-lg-6  p-2'>
            <lable >Address</lable>
            <input className='form-control' type={"text"} placeholder="Enter Address"
              value={formik.values.address} onChange={formik.handleChange}
              name="address"></input>
            <span style={{ color: 'red' }}>{formik.errors.address}</span>
          </div>
          <div className='col-lg-12  p-2'>

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

export default Editstudent