import React from 'react'

function Search({ searchTerm, setsearchTerm}) {
  return (
   <div className="search">
    <div>
      <img src="./search.svg" alt="search" />

      <input
       type="text" 
       placeholder='Search through thousands of movies'
       value={searchTerm}
       onChange={(e) => setsearchTerm(e.target.value)}
      />
      </div>
   </div>
  )
}

export default Search