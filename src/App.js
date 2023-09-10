import React, {Component} from 'react';
import './App.css';
import 'tachyons';
import CardList from './components/CardList';

class App extends Component{
  constructor(){
    super();
    this.state = {
      pokemon: [],
    };
  }

  componentDidMount() {
    
    //método fetch para fazer uma solicitação à API PokeAPI para obter uma lista de 9 Pokémon. 
    //O método fetch retorna uma promessa, então encadeamos .then() para lidar com a resposta e a transformamos em JSON.

    fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
    .then((response) => response.json())
    .then((dataPoke)=>{
       // Mapear a lista de resultados para criar um array de promessas
       // onde cada promessa representa uma solicitação para obter detalhes de um Pokémon.

      const detailsPromises = dataPoke.results.map((pokemon) =>
          fetch(pokemon.url)
          .then((res) => res.json())
        );

         //Promise.all para esperar que todas as promessas sejam resolvidas.
        Promise.all(detailsPromises).then((details) => {

          // Quando todos os detalhes estão disponíveis, atualizamos o estado com os dados dos Pokémon.
          this.setState({ pokemon: details });
          
        });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  

  render(){

     // O método render é onde definimos a estrutura do nosso componente.
    return( 
    <div className="App">
     <h1 className='tc'>Pokedex , search the pokemon you looking for</h1>
     <CardList pokemon={this.state.pokemon} />
    </div>
    )
  }
}

export default App;
