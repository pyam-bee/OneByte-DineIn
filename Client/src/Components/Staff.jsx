import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';

const Staff = () => {

    const history = useNavigate();

    const [text, setText] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/staff", {
                text, password
            })
            .then(res => {
                if(res.data == "exist"){
                    history("/home",{state:{id:text}})
                }
                else if(res.data == "notexist"){
                    alert("Staff is not registered")
                }
            })
            .catch(e => {
                alert("wrong details")
                console.log(e);
            })

        }catch(e){
            console.log(e);
        }   
    }

  return (
    <div>
        <h1>Staff</h1>

        <form action="POST">
            <input type="text" onChange={(e) => {(e.target.value)}} placeholder='Username' />
            <input type="password" onChange={(e) => {(e.target.value)}} placeholder='Password'/>

            <input type="submit" />

        </form>

        <br />
        <p>OR</p>
        <br />
        
        <Link to="/"> Register as Guest </Link>

    </div>
  )
}

export default Staff