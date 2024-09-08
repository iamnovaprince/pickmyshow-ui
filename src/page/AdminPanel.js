import React, { useState } from 'react';
import CerdentialCard from 'src/component/nuclear/card/CredentialCard';
import Searchbar from 'src/component/searchbar/Index';
import MovieModal from '../component/nuclear/modal/MovieModal'; // Import the MovieModal
import { currentMovieData } from 'src/Data/MovieData';

const AdminPanel = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null); // New state for selected movie
    const [movieList, setMovieList] = useState(currentMovieData); // State to manage the list of movies

    const adminvalue = {
        name: "prince Kumar",
        email: "nova@gmail.com",
        password: "************"
    };

    const handleOpenModal = (movie) => {
        setSelectedMovie(movie); // Set the selected movie data
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedMovie(null); // Clear the selected movie when modal closes
    };

    const handleSubmitMovie = (newMovie) => {
        // Check if we are editing or creating a new movie
        if (selectedMovie) {
            // Update the movie in the list
            const updatedMovies = movieList.map((movie) =>
                movie.id === selectedMovie.id ? { ...selectedMovie, ...newMovie } : movie
            );
            setMovieList(updatedMovies);
            alert("Movie details have been updated!");
        } else {
            // Create a new movie and add it to the list
            const newMovieWithId = { id: movieList.length + 1, ...newMovie };
            setMovieList([...movieList, newMovieWithId]);
            alert("New movie has been added!");
        }

        handleCloseModal();
    };

    const handleDeleteMovie = (movieId) => {
        const confirmed = window.confirm("Are you sure you want to delete this movie?");
        if (confirmed) {
            // Remove the movie from the list
            const updatedMovies = movieList.filter((movie) => movie.id !== movieId);
            setMovieList(updatedMovies);
            alert("Movie has been deleted!");
        }
    };

    return (
        <div style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ width: "20%", height: "100vh", backgroundColor: "#16325B", padding: "30px 5px 0px 30px", display: "flex", flexDirection: "column" }}>
                <CerdentialCard title="Admin" value={adminvalue} />
            </div>
            <div style={{ width: "80%", height: "100vh", padding: "50px 50px", overflow: "auto" }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#f8f9fa', padding: "25px" }}>
                    <h1 style={{ fontSize: "20px", fontWeight: "500", alignSelf: "flex-start", marginBottom: "20px" }}>List of Movies</h1>
                    <div style={{ width: '95%', display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                        <button
                            onClick={() => handleOpenModal(null)} // Pass null for creating a new movie
                            style={{ height: "fit-content", backgroundColor: '#6c757d', color: '#fff', padding: '5px', borderRadius: '4px', textDecoration: 'none', display: 'inline-block', margin: "5px" }}>
                            + Create Movie
                        </button>
                        <Searchbar />
                    </div>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr>
                                <th style={{ borderBottom: '2px solid #dee2e6', padding: '12px' }}>Id</th>
                                <th style={{ borderBottom: '2px solid #dee2e6', padding: '12px' }}>Title</th>
                                <th style={{ borderBottom: '2px solid #dee2e6', padding: '12px' }}>Release_date</th>
                                <th style={{ borderBottom: '2px solid #dee2e6', padding: '12px' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {movieList.map((d, i) => (
                                <tr key={i} style={{ borderTop: '1px solid #dee2e6' }}>
                                    <td style={{ padding: '12px', textAlign: "center" }}>{d.id}</td>
                                    <td style={{ padding: '12px', textAlign: "center" }}>{d.title}</td>
                                    <td style={{ padding: '12px', textAlign: "center" }}>{d.release_date}</td>
                                    <td style={{ padding: '12px', textAlign: "center" }}>
                                        <button
                                            onClick={() => handleOpenModal(d)} // Open modal with selected movie data
                                            style={{ backgroundColor: '#007bff', color: '#fff', padding: '4px 8px', borderRadius: '4px', marginRight: '8px', border: 'none', cursor: 'pointer' }}>
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDeleteMovie(d.id)} // Add delete functionality
                                            style={{ backgroundColor: '#dc3545', color: '#fff', padding: '4px 8px', borderRadius: '4px', border: 'none', cursor: 'pointer' }}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <MovieModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onSubmit={handleSubmitMovie}
                movie={selectedMovie} // Pass the selected movie to the modal
            />
        </div>
    );
};

export default AdminPanel;
