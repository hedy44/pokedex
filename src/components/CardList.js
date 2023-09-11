import React from 'react';
import Card from './Card';

    const CardList = ({ pokemon, searchField }) => {
        const filteredPokemon = pokemon.filter((p) => {
          return p.name.toLowerCase().includes(searchField.toLowerCase());
        });

    return (
        <div className='card-list flex flex-wrap justify-center'>
            {filteredPokemon.map((p, index) => (
                <Card
                key={index} 
                name={p.name}
                types={p.types}
                sprites={p.sprites}
                />
             ))}
        </div>
    )
}

export default CardList; 