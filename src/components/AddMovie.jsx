import React, { useState } from 'react'

const AddMovie = ({onAdd}) => {
const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
        title,
        description,
        posterURL,
        rating: parseFloat(rating),
      };
      onAdd(newMovie);
      setTitle('');
      setDescription('');
      setPosterURL('');
      setRating('');
    };
  return (
    <form onSubmit={handleSubmit} className="add-movie-form">
    <h2>Add a New Movie</h2>
    <input
      type="text"
      placeholder="Title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      required
    />
    <input
      type="text"
      placeholder="Description"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      required
    />
    <input
      type="text"
      placeholder="Poster URL"
      value={posterURL}
      onChange={(e) => setPosterURL(e.target.value)}
      required
    />
    <input
      type="number"
      placeholder="Rating"
      value={rating}
      onChange={(e) => setRating(e.target.value)}
      required
      min="0"
      max="10"
    />
    <button type="submit">Add Movie</button>
  </form>
  )
}

export default AddMovie