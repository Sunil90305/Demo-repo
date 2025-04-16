import axios from 'axios';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

export default function AddStudent() {

    let navigate = useNavigate(); // Import useNavigate from react-router-dom

    const [student  , setStudent] = React.useState({
        name: "",
        branch: "",
        percentage: ""
    });

    const { name, branch, percentage } = student;
    const onInputChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/student/add", student);
        alert("Student Added Successfully");    
        navigate("/");
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Add New Student</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" 
                            name="name" placeholder="Enter your Name" value={name} onChange={(e)=> onInputChange(e)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="branch" className="form-label">Branch</label>
                            <input type="text" className="form-control" id="branch" 
                            name="branch" placeholder="Enter your Branch" value={branch}
                            onChange={(e)=> onInputChange(e)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="percentage" className="form-label">Percentage</label>
                            <input type="number" className="form-control" id="percentage" 
                            name="percentage" placeholder="Enter your Percentage" min="0" max="100" step="1" value={percentage} 
                            onChange={(e)=> onInputChange(e)}/>
                        </div>
                        <button type="submit" className="btn btn-outline-primary">Submit</button>
                        <Link type="cancel" className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

