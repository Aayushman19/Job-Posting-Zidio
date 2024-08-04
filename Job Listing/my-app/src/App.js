import React from 'react';
import './App.css';
import SearchBarHeader from './Components/Search-Bar/Search';
import JobList from './Components/Listing/listing';

function App() {
  return ( 
    <div className='search-bar'>
      <SearchBarHeader />
      <JobList/>
    </div>
  );
}

export default App;
