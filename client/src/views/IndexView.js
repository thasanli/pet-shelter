import React, { useEffect, useState } from 'react';
import { Link, Redirect, Router } from "@reach/router";
import axios from 'axios';

const IndexView = (props) => {

    const [allPets, setAllPets] = useState(null);

    useEffect((e) => {
        axios.get("http://localhost:8000/api/pet")
            .then((res) => {

                setAllPets(res.data)
            })
            .catch((err) => {

            })
    })

    const lableStyle = {
        margin: "0 auto"
    }

    if (allPets == null) {
        return 'loading...'
    }



    return (
        <div>
            <Link to="/pets/new"> add a pet to the shelter</Link>
            <h1>Pet Shelter</h1>
            <p>These pets are looking for a good home</p>
            <table style={lableStyle}>
                <thead>
                    <td>Name</td>
                    <td>Type</td>
                    <td>Actions</td>
                </thead>
                {allPets.sort((a, b) => a.type > b.type ? 1 : -1).map((pet) => {
                    return (
                        <tbody key={pet._id}>
                            <td>{pet.name}</td>
                            <td>{pet.type}</td>
                            <td>
                                <Link to={`/pets/${pet._id}`}>details</Link>
                                |
                                <Link to={`/pets/${pet._id}/edit`} >edit</Link>
                            </td>
                        </tbody>
                    );
                })}
            </table>


        </div>
    );

}

export default IndexView;