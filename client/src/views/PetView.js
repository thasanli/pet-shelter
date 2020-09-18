import React, { useEffect, useState } from 'react';
import { Link, Redirect, Router, navigate } from "@reach/router";
import axios from 'axios';


const PetView = (props) => {
    const [pet, setPet] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${props.id}`)
            .then((res) => {
                setPet(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    function handleDelete(event) {
        axios.delete(`http://localhost:8000/api/pet/${event}`)
            .then((res) => {
                console.log(res);
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
            })
    }



    function handleLike() {
        const selectedPet = pet;
        selectedPet.like++;
        const like = selectedPet.like
        console.log(like);

        axios
            .put(`http://localhost:8000/api/pet/${selectedPet._id}`, { like: like })
            .then((res) => {
                setPet(res.data);
            })
            .catch((err) => {
                console.log(err.response);
            });
    }

    if (pet == null) {
        return 'loading...'
    }


    return (
        <div>
            <Link to="/"> back to home </Link>
            <br />

            <button onClick={event => handleDelete(event = pet._id)} > Adopt {pet.name}</button>


            <h1>Pet Shelter</h1>
            <p>Details about: {pet.name}</p>
            <div>
                <p>Pet type: {pet.type} </p>
                <p>Description: {pet.description}</p>
                <p>Skills: <br /> {pet.skill1} <br /> {pet.skill2} <br />{pet.skill3} </p>
            </div>
            <button onClick={handleLike}> Like {pet.name} </button> <br />
            <span><br /> {pet.like}  like(s)</span>
        </div>
    );
}

export default PetView;