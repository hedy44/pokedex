import React from 'react';
import Card from './Card';

const CardList = ({pokemon}) => {

    console.log(pokemon);


    return (
        <div className='card-list'>
            {pokemon.map((p, index) => (
      <Card
      key={index}
      name={pokemon[index].name}
      types={pokemon[index].types}
      sprites={pokemon[index].sprites}
      />
    ))}
        </div>
    )
}

export default CardList; 