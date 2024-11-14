import React ,{useState} from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addUser,updateUser } from './redux/userSlice';
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
        const {id}=useParams();
        const users=useSelector(state=>state.users.users);
        const user=users.find(u=>u.id===id);
        console.log(user);
        const [name, setName] = useState(user.name);
        const [email, setEmail] = useState(user.email);
        const [age, setAge] = useState(user.age);
        const dispatch = useDispatch();
        const navigate = useNavigate();

        
    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3000/update/${id}`, { name, email, age })
            .then((result) => {
                dispatch(updateUser({ id, name, email, age }));
                console.log(result);
                navigate('/');
            })
            .catch((err) => {
                console.log(err);
            });
    };


  return (
        <>
        <div className='d-flex vh-100 vw-100 bg-primary justify-content-center align-items-center'
        style={{
                backgroundImage: 'url("https://spbinteres.ru/wp-content/uploads/2020/07/jrpuno45vgxmuk9jk8jyw-1.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
        <div className="vw-90 bg-white rounded p-3">
                <form onSubmit={handleUpdate}>
                        <h2>Update</h2>
                        <div className="mb-2">
                                <label htmlFor="">Name</label>
                                <input type="text" placeholder='Enter Name' className='form-control' value={name} onChange={(e)=>setName(e.target.value)}/>
                        </div>
                        <div className="mb-2">
                                <label htmlFor="">Email</label>
                                <input type="email" placeholder='Enter email' className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div className="mb-2">
                                <label htmlFor="">Age</label>
                                <input type="number" placeholder='Enter age' className='form-control' value={age} onChange={(e)=>setAge(e.target.value)}/>
                        </div>
                        <button className='btn btn-success'>Update</button>
                </form>
        </div>
    </div>
    </>
  )
}

export default Update

