import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className='pa2 tc'>
      <input
        className='pa2 br4 b--red '
        type='search'
        placeholder ='Ex: Bulbasaur...'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;