import React, { useEffect } from 'react'; //rfc to create a functional component
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
export default function Home() {

    const [students,setUsers] = React.useState([]);

    useEffect(() => {
       loadUsers();
    },[]); // useEffect is a hook that runs after the component mounts

    const{rollNo} =useParams();

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/students");
        setUsers(result.data);
    };

    const deleteUser = async (rollNo) => {
        await axios.delete(`http://localhost:8080/student/delete/${rollNo}`);
        alert("Student Deleted Successfully");
        loadUsers();
    }

    return (
        <div className='container'>
            <div className="py-4">
                <table className="table border shadow table-bordered table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Roll No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Percentage</th>
                            <th scope="col">Branch</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map((user, index) => (
                                <tr key={index}>
                                    <th scope="row">{user.rollNo}</th>
                                    <td>{user.name}</td>
                                    <td>{user.percentage}</td>
                                    <td>{user.branch}</td>
                                    <td>
                                        <Link className="btn btn-outline-dark mx-1" to={`/student/${user.rollNo}`}>View</Link>
                                        <Link className="btn btn-outline-primary mx-1" to={`/student/update/${user.rollNo}`}>Edit</Link>
                                        <button className="btn btn-outline-danger mx-1" onClick={()=>deleteUser(user.rollNo)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}
