import React from 'react'

const Filter = ({ rating, title, setRating, setTitle, handleFilterChange}) => {

  return (
    <div className="filter">
    <h2>Filter Movies</h2>
    <input
      type="text"
      placeholder="Filter by Title"
      value={title}
      onChange={(e) => {
        setTitle(e.target.value);
        handleFilterChange();
      }}
    />
    <input
      type="number"
      placeholder="Filter by Rating"
      value={rating}
      onChange={(e) => {
        setRating(e.target.value);
        handleFilterChange();
      }}
      min="0"
      max="10"
    />
  </div>
  )
}

export default Filter