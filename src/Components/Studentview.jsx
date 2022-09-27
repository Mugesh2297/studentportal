import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

function Studentview() {
    const params = useParams();
    console.log(params)
   const[userData,setUserData] = useState({})
    useEffect(() => {
        loadUser()
    }, [])
    let loadUser = async () => {
        try {
            let user = await axios.get(`https://6322a4b3362b0d4e7dd04cfa.mockapi.io/student/${params.productid}`);
            setUserData(user.data)
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
        <div className='row'>
        <div className='col-lg-6 p-2 mx-auto'>

        <div class="card" style={{width:'18 rem'}}>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><b>Student Name:</b> {userData.name}</li>
          <li class="list-group-item"><b>Age:</b> {userData.age}</li>
          <li class="list-group-item"><b>Email: </b>{userData.email}</li>
          <li class="list-group-item"><b>Address: </b>{userData.address}</li>
         
          
        </ul>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
       
    )
}

export default Studentview