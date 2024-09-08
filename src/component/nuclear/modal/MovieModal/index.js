import React, { useState, useEffect } from 'react';

const MovieModal = ({ isOpen, onClose, onSubmit, movie }) => {
    const [newMovie, setNewMovie] = useState({
        title: '', genre: '', description: '', rating: '', release_date: '', director: '', age_certification: '', image_url: '', duration: ''
    });

    // Use useEffect to update the form values when a movie is selected
    useEffect(() => {
        if (movie) {
            setNewMovie({
                ...movie,
                genre: movie.genres.join(', ')  // Convert array to comma-separated string for input
            });
        } else {
            setNewMovie({
                title: '', genre: '', description: '', rating: '', release_date: '', director: '', age_certification: '', image_url: '', duration: ''
            });
        }
    }, [movie]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewMovie(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Convert the genre string back to an array
        const genresArray = newMovie.genre.split(',').map(genre => genre.trim());

        // Create the final movie object with genres as an array
        const finalMovie = {
            ...newMovie,
            genres: genresArray  // Set genres as an array for submission
        };

        // Print all parameters to the console
        console.log('Movie Data Submitted:', finalMovie);

        onSubmit(finalMovie);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '8px', width: '500px', height: "600px", boxShadow: '0 2px 10px rgba(0,0,0,0.1)'}}>
                <h2 style={{ fontSize: "24px", fontWeight: "500", marginBottom: "15px" }}>{movie ? 'Edit Movie' : 'Create Movie'}</h2>
                <form onSubmit={handleSubmit} style={{ fontSize:"14px"}}>
                    <div style={{ marginBottom: '12px', display: "flex", gap: "70px" }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '5px', fontWeight:"500" }}>Title:</label>
                            <input type="text" name="title" value={newMovie.title} onChange={handleInputChange} required style={{ width: '300px', padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }} />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '5px', fontWeight:"500" }}>Rating:</label>
                            <input type="number" name="rating" value={newMovie.ratings} onChange={handleInputChange} min="0.1" max="9.9" step="0.1" required style={{ width: '80px', padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }} />
                        </div>
                    </div>

                    <div style={{ marginBottom: '12px', display: "flex", gap: "50px" }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '5px', fontWeight:"500" }}>Genre: <small>(Separated by commas)</small></label>
                            <input type="text" name="genre" value={newMovie.genre} onChange={handleInputChange} required style={{ width: '250px', padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }} />
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '5px', fontWeight:"500" }}>Release Date:</label>
                            <input type="date" name="release_date" value={newMovie.release_date} onChange={handleInputChange} required style={{ width: '150px', padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }} />
                        </div>
                    </div>

                    <div style={{ marginBottom: '12px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontWeight:"500" }}>Description:</label>
                        <textarea name="description" value={newMovie.description} onChange={handleInputChange} required rows="4" style={{ width: '100%', padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}></textarea>
                    </div>

                    <div style={{ marginBottom: '8px', display: "flex", gap: "70px" }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '5px', fontWeight:"500" }}>Director:</label>
                            <input type="text" name="director" value={newMovie.director} onChange={handleInputChange} required style={{ width: '250px', padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }} />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '5px', fontWeight:"500" }}>Age Certification:</label>
                            <input type="text" name="age_certification" value={newMovie.age_certification} onChange={handleInputChange} required style={{ width: '80px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
                        </div>

                    </div>

                    <div style={{ marginBottom: '35px', display: "flex", gap: "50px" }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '5px', fontWeight:"500" }}>Image URL:</label>
                            <input type="text" name="image_url" value={newMovie.image_url} onChange={handleInputChange} required style={{ width: '300px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '5px', fontWeight:"500" }}>Duration:<small>(min)</small></label>
                            <input type="number" name="duration" value={newMovie.duration} onChange={handleInputChange} required style={{ width: '100px', padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }} />
                        </div>


                    </div>

                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <button
                            type="button"
                            onClick={onClose}
                            style={{ backgroundColor: '#dc3545', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '4px', marginRight: '10px' }}>
                            Cancel
                        </button>
                        <button
                            type="submit"
                            style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '4px' }}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MovieModal;
