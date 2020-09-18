import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Redirect, Router, navigate } from "@reach/router";

// import { FormControl, FormLabel, FormHelperText, Input, InputLabel, Button } from '@material-ui/core';

// const flex = {
//     display: "flex",
//     flexDirection: "column",
//     width: "40%",
//     margin: "0 auto"
// }

const FormView = (props) => {

    const [name, setName] = useState(null)
    const [type, setType] = useState(null)
    const [description, setDescription] = useState(null)
    const [skill1, setSkill1] = useState(null)
    const [skill2, setSkill2] = useState(null)
    const [skill3, setSkill3] = useState(null)

    const [err, setErr] = useState(null);


    function handleSubmit(e) {
        console.log('test');
        e.preventDefault();
        axios.post(`http://localhost:8000/api/pet/`, {
            name: name,
            type,
            description,
            skill1,
            skill2,
            skill3
        })
            .then((res) => {
                if (res.data.message == null) {
                    navigate('/')
                }
                console.log(res.data.message);
                setErr(res.data.message);

            })
            .catch((err) => {
                console.log(err.json().message);
            })
    }

    const errorStyle = {
        color: "red"
    }

    return (

        <div>
            <Link to="/"> back to home </Link>
            <h1>Pet Shelter</h1>
            <p>Know a pet needing a home? </p>
            <form onSubmit={(e) => handleSubmit(e)} >
                <p style={errorStyle}>{err}</p>
                <div>
                    <label> Pet Name: </label>
                    <input type="text"
                        onChange={(e) => setName(e.target.value)} />
                    <p></p>
                </div>
                <div>
                    <label> Pet Type: </label>
                    <input type="text"
                        onChange={(e) => setType(e.target.value)} />
                    <p></p>
                </div>
                <div>
                    <label> Pet Description: </label>
                    <input type="text"
                        onChange={(e) => setDescription(e.target.value)} />
                    <p></p>
                </div>
                <p>Skills (optional) </p>
                <div>
                    <label> Skill 1: </label>
                    <input type="text"
                        onChange={(e) => setSkill1(e.target.value)} />
                </div>
                <div>
                    <label> Skill 2: </label>
                    <input type="text"
                        onChange={(e) => setSkill2(e.target.value)} />
                </div>
                <div>
                    <label> Skill 3: </label>
                    <input type="text"
                        onChange={(e) => setSkill3(e.target.value)} />
                </div>
                <button>Add Pet</button>
            </form>
        </div>
    )
}

export default FormView;