import React from 'react';

const Card = ({ name, types, sprites}) =>{
    const typeList = types.map((typeObj) => typeObj.type.name).join(', ');

    // Função para capitalizar a primeira letra do nome
    const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

    return (

        
        <div className=' bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5'>

            <div className='tc'>
            <img alt={`Pokemon ${name}`} src= {sprites.front_default} style={{ width: '150px', height: '150px' }}/>
            <h2 className='f3'>{capitalizeFirstLetter(name)}</h2>
            <p>Types: {typeList}</p>
            </div>

        </div>
    )
}

export default Card; 