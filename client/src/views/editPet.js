import { navigate, Link } from '@reach/router';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';


const EditPet = (props) => {
    const [name, setName] = useState(null)
    const [type, setType] = useState(null)
    const [description, setDescription] = useState(null)
    const [skill1, setSkill1] = useState(null)
    const [skill2, setSkill2] = useState(null)
    const [skill3, setSkill3] = useState(null)

    const [err, setErr] = useState(null);


    useEffect(() => {
        Axios.get(`http://localhost:8000/api/pet/${props.id}`)
            .then((res) => {
                setName(res.data.name)
                setType(res.data.type)
                setDescription(res.data.description)
                setSkill1(res.data.skill1)
                setSkill2(res.data.skill2)
                setSkill3(res.data.skill3)
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])

    function handleSubmit(e) {
        e.preventDefault();
        Axios.put(`http://localhost:8000/api/pet/${props.id}`, {
            type,
            description,
            skill1,
            skill2,
            skill3
        }, { runValidators: true })
            .then((res) => {
                if (res.data.message == null) {
                    navigate('/')
                }
                setErr(res.data.message);
            })
            .catch((err) => {
                console.log(err.json().message);
            })
    }

    return (
        <div>
            <Link to="/"> back to home </Link>
            <h1>Pet Shelter</h1>
            <p>Edit {}</p>
            <p>{err}</p>
            <form onSubmit={(e) => handleSubmit(e)} >
                <div>
                    <label> Pet Name: </label>
                    <input type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                    <p>{}</p>
                </div>
                <div>
                    <label> Pet Type: </label>
                    <input type="text"
                        value={type}
                        onChange={(e) => setType(e.target.value)} />
                    <p></p>
                </div>
                <div>
                    <label> Pet Description: </label>
                    <input type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)} />
                    <p></p>
                </div>
                <p>Skills (optional) </p>
                <div>
                    <label> Skill 1: </label>
                    <input type="text"
                        value={skill1}
                        onChange={(e) => setSkill1(e.target.value)} />
                </div>
                <div>
                    <label> Skill 2: </label>
                    <input type="text"
                        value={skill2}
                        onChange={(e) => setSkill2(e.target.value)} />
                </div>
                <div>
                    <label> Skill 3: </label>
                    <input type="text"
                        value={skill3}
                        onChange={(e) => setSkill3(e.target.value)} />
                </div>
                <button>Edit</button>
            </form>

        </div>
    );

}

export default EditPet;
