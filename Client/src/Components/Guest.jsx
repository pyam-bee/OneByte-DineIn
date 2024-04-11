import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Guest = () => {

    const history = useNavigate();

    const [text, setText] = useState('');
    const [email, setEmail] = useState('');

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/", {
                text, email
            })
            .then(res => {
                if(res.data =="exist"){
                    alert("Your account has already registered")
                }
                else if(res.data =="notexist"){
                    history("/home",{state:{id:text}})
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
        <h1>Guest:</h1>

        <form action="POST">
            <input type="text" onChange={(e) => {(e.target.value)}} placeholder='Username' />
            <input type="email" onChange={(e) => {(e.target.value)}} placeholder='Email'/>

            <input type="submit" />

        </form>

        <br />
        <p>OR</p>
        <br />
        
        <Link to="/staff">Are you Staff ? </Link>

    </div>
  )
}

export default Guest