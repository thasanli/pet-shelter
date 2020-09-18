import React, { useState, useEffect } from 'react';
import './App.css';
import FormView from './views/Form'
import IndexView from './views/IndexView';
import { Link, Redirect, Router } from "@reach/router";
import PetView from './views/PetView';
import EditPet from './views/editPet';



import io from 'socket.io-client';
const socket = io(":8000");

function App() {
  // const [item, setItem] = useState(null);

  // useEffect(() => {
  //   socket.on("item updates", (updatedItem) => {
  //     setItem(updatedItem);
  //     console.log(updatedItem);
  //   });
  //   return () => {
  //     socket.disconnect(true);
  //   }
  // }, [])

  return (
    <div className="App">
      <Router>
        <IndexView path="/" />
        <FormView path="/pets/new" />
        <PetView path="/pets/:id" />
        <EditPet path="/pets/:id/edit" />

      </Router>

    </div>
  );
}

export default App;
