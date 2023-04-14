import React from 'react';

const Character = ({character}) => {
    const {id, name, status, gender, species, image} = character;

    return (
        <div>
            <div>id: {id} </div>
            <div>name: {name} </div>
            <div>status: {status} </div>
            <div>gender: {gender} </div>
            <div>species: {species} </div>
            <div><img src={image} alt={name}/> </div>
            
        </div>
    );
};

export default Character;