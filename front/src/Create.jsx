import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from './redux/userSlice';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/create', { name, email, age })
            .then((result) => {
                dispatch(addUser(result.data));
                console.log(result);
                navigate('/');
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className='d-flex vh-100 vw-100 bg-primary justify-content-center align-items-center'
        style={{
            backgroundImage: 'url("https://spbinteres.ru/wp-content/uploads/2020/07/jrpuno45vgxmuk9jk8jyw-1.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
        >
            <div className="vw-70 bg-white rounded p-3" 
            >
                <form onSubmit={handleSubmit}>
                    <h2>Add User</h2>
                    <div className="mb-2">
                        <label>Name</label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label>Age</label>
                        <input
                            type="number"
                            placeholder="Enter Age"
                            className="form-control"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Create;
