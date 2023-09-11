import React from 'react';
import './TypeBadge.css';


const TypeBadge = ({ types }) => {
    // Mapeie cada tipo para a classe de cor correspondente
    const typeColors = types.map((type) => {
      switch (type.type.name.toLowerCase()) {
        case 'normal':
          return 'bg-normal';
        case 'fire':
          return 'bg-fire';
        case 'water':
          return 'bg-water';
        case 'electric':
          return 'bg-electric';
        case 'grass':
          return 'bg-grass';
        case 'ice':
          return 'bg-ice';
        case 'fighting':
          return 'bg-fighting';
        case 'poison':
          return 'bg-poison';
          case 'flying':
          return 'bg-flying';
        case 'ground':
          return 'bg-ground';
        case 'psychic':
          return 'bg-psychic';
        case 'bug':
          return 'bg-bug';
        case 'rock':
          return 'bg-rock';
        case 'ghost':
          return 'bg-ghost';
        case 'dragon':
          return 'bg-dragon';
        case 'fairy':
          return 'bg-fairy';
          case 'steel':
          return 'bg-steel';
        default:
          return 'bg-light-gray'; // Fallback para um fundo padrão.
      }
    });

    return (
        <div className="type-badges tc">
          {types.map((type, index) => (
            <div key={index} className={`br2 type-badge ${typeColors[index]}`}>
              {type.type.name}
            </div>
          ))}
        </div>
      );
    };
    
    export default TypeBadge;