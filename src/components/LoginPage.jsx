import React, { useEffect, useState } from "react";
import { Auth } from "./auth";
import { db } from "config/firebase";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

function LoginPage() {
  const [movieList, setMovieList] = useState([]);

  // New Movie states
  const [newMoviceTitle, setNewMoviceTitle] = useState("");
  const [newReleaseDate, setNewReleaseDate] = useState("");
  const [isNewMovieOscar, setIsNewMovieOscar] = useState(true);

  // Update Title State
  const [updatedTitle, setUpdatedTitle] = useState("");

  const movieCollectionRef = collection(db, "movies");

  const getMovieList = async () => {
    //READ THE DATA
    // SET THE POST LIST
    try {
      const data = await getDocs(movieCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMovieList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getMovieList();
  }, []);

  const onSubmitMovie = async () => {
    try {
      await addDoc(movieCollectionRef, {
        title: newMoviceTitle,
        releaseDate: newReleaseDate,
        receivceAnOscar: isNewMovieOscar,
      });
      getMovieList();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteMovie = async (id) => {
    const movieDoc = doc(db, "movies", id);
    await deleteDoc(movieDoc);
    getMovieList()
  };

  return (
    <div>
      <Auth />
{/* 
      <div>
        <input
          placeholder="movie title..."
          onChange={(e) => setNewMoviceTitle(e.target.value)}
        />
        <input
          placeholder="Release Date..."
          type="number"
          onChange={(e) => setNewReleaseDate(e.target.value)}
        />
        <input
          type="checkbox"
          checked={isNewMovieOscar}
          onChange={(e) => setIsNewMovieOscar(e.target.checked)}
        />
        <label>Received an Oscar</label>
        <button onClick={onSubmitMovie}>Submit Post</button>
      </div>

      <div>
        {movieList.map((movie) => (
          <div>
            <h1 style={{ color: movie.receivceAOscar ? "green" : "red" }}>
              {movie.title}
            </h1>
            <p>Date: {movie.releaseDate}</p>

            <button onClick={() => deleteMovie(movie.id)}>Delete Movie</button>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default LoginPage;
