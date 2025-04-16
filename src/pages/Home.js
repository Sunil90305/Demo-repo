import React, { useEffect } from 'react'; //rfc to create a functional component
import axios from 'axios';
export default function Home() {

    const [students,setUsers] = React.useState([]);

    useEffect(() => {
       loadUsers();
    },[]);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/students");
        setUsers(result.data);
    };

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
                                        <button className="btn btn-outline-dark mx-1">View</button>
                                        <button className="btn btn-outline-primary mx-1">Edit</button>
                                        <button className="btn btn-outline-danger mx-1">Delete</button>
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
