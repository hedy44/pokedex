import React from 'react';
import './Card.css'; 
import TypeBadge from './TypeBadge';


const Card = ({  name, types, sprites, id}) =>{
    const typeList = types.map((typeObj) => typeObj.type.name).join(', ');
    // Verificar o primeiro tipo do Pokémon (assumindo que cada Pokémon tem pelo menos um tipo)
    const primaryType = types[0].type.name;
    // Formate o número do Pokémon para ter sempre 3 dígitos preenchidos com zeros à esquerda
    const formattedId = String(id).padStart(3, '0');
    // Função para capitalizar a primeira letra do nome
    const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

    return (

        
        <div className={`bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5 `}>
            
            <p className="number tc">#{formattedId}</p>

            <div className={`circle ${primaryType}-circle`}>
                <img alt={`Pokemon ${name}`} src= {sprites.front_default} style={{ width: '150px', height: '150px' }}/>
            </div>    

            <div className='tc'>
                <h2 className='f3'>{capitalizeFirstLetter(name)}</h2>
                <TypeBadge types={types} />
            </div>

        </div>
    )
}

export default Card; 