import React from 'react';
import Character from "../character/character";


const characters = () => {

    const characters = [

        {
            "id": 1,
            "name": "Rick Sanchez",
            "status": "Alive",
            "species": "Human",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        },
        {
            "id": 2,
            "name": "Morty Smith",
            "status": "Alive",
            "species": "Human",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        }
    ];

    return (
        <div>
            {characters.map(character => (<Character character={character} key={character.id}/>)
            )}
        </div>
    );
};

export default characters;