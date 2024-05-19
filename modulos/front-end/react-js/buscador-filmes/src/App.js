import './App.css';
import { useState } from 'react';
import Search from './components/Search/Search';
import MovieGalery from './components/MovieGalery/MovieGalery';

export default function App() {
  const [search, setSearch] = useState('')
  const [movies, setMovies] = useState([])
  
  const fetchMovies = async () => {
    await fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&language=pt-BR&api_key=4e44d9029b1270a757cddc766a1bcb63`)
    .then(response => response.json())
    .then(response => 
      setMovies(response.results)
    )
    .catch(error => console.log(error))
  }

  return (
    <main>
      <Search value={search} setValue={setSearch} search={fetchMovies}/>

      <MovieGalery movies={movies}/>
    </main>
  );
}
