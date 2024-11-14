import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {deleteUser } from './redux/userSlice';
import axios from 'axios';

const User = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);
     const handelDelete=(id)=>{
          axios.delete(`http://localhost:3000/delte/${id}`).then((res)=>{
            dispatch(deleteUser({id}));
            console.log(res);
          }).catch((err)=>{
            console.log(err);
          })
     }
    return (
        <div className='d-flex vh-100 vw-100 bg-primary justify-content-center align-items-center' 
        style={{
            backgroundImage: 'url("https://www.lufthansa.com/content/dam/lh/images/pixels_variations/c-1872469905-6082674.jpg.transform/lh-dcep-transform-width-1440/img.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
        >
            <div className="vw-90 bg-white rounded p-3"   >
                <Link to='/create' className="btn btn-success btn-sm mb-2">
                    Add+
                </Link>
                {users.length === 0 ? (
                    <p>No users found.</p>
                ) : (
                    <table className="table" 
                    >
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Age</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                    <td>
                                        <Link onClick={()=>handelDelete(user.id)} className='btn btn-sm btn-danger me-2'>Delete</Link>
                                        <Link to={`/update/${user.id}`} className='btn btn-sm btn-success'>Update</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default User;
