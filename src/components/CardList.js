import React from 'react';
import Card from './Card';

    const CardList = ({ pokemon, searchField }) => {
        const filteredPokemon = pokemon.filter((p) => {
          return p.name.toLowerCase().includes(searchField.toLowerCase());
        });

    return !pokemon.length ?
    <h1 className='tc f1'>Loading</h1> :(
        <div className='card-list flex flex-wrap justify-center'>
            {filteredPokemon.map((p, index) => (
                <Card
                key={index} 
                id={p.id}
                name={p.name}
                types={p.types}
                sprites={p.sprites}
                />
             ))}
        </div>
    )
}

export default CardList; 