import React from 'react';
import './App.css';
import CharactersList from './pages/CharactersList';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Character from './pages/Character';
import Search from './pages/Search';


// https://rickandmortyapi.com/graphql
function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<CharactersList />} />
          <Route path='search' element={<Search />} />


          <Route path='/:id' element={<Character />} />

        </Routes>

      </div>
    </Router>
  );
}

export default App;
