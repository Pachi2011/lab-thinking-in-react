import React from 'react'

function SearchBar(props) {

  return (
    <div className="topnav">
      <label htmlFor="">Search for Product
    <input type="text" onChange={(event)=>props.handleSearch(event.target.value)}/> 
    </label>
  </div>
  )
}

export default SearchBar