import React, { use } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

export default function ViewStudent() {
    
    const [students,setUsers] = React.useState({
        name: "",
        branch: "",
        percentage: ""
    });

    const{rollNo} =useParams();
    const loadUsers = async () => {
        const result = await axios.get(`http://localhost:8080/student/${rollNo}`);
        setUsers(result.data);
    };
    React.useEffect(() => {
        loadUsers();
    },[]); // useEffect is a hook that runs after the component mounts
    

    return (

        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4"> Student Details</h2>
                    <div className="card">
                        <div className="card-header">
                            <b>Student ID :  </b> {students.rollNo}

                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><b>Name :  </b> {students.name}</li>
                                <li className="list-group-item"><b>Branch :  </b> {students.branch}</li>
                                <li className="list-group-item"><b>Percentage :  </b>{students.percentage} </li>
                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-outline-primary mx-2" to={"/"}>Back to Home</Link>
                </div>
            </div>
        </div>


    )
}
