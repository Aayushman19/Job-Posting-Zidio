import React, { useState } from 'react';

const SearchBarHeader = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    // Handle search functionality here
    console.log('Searching for:', searchTerm);
  };

  return (
    <header style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
      <h1 style={{ fontSize: '24px', margin: '0' }}>Search</h1>
      <div style={{ marginTop: '10px' }}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search..."
          style={{
            width: '100%',
            padding: '8px',
            fontSize: '16px',
            borderRadius: '4px',
            border: '1px solid #ddd',
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            marginTop: '10px',
            padding: '8px 16px',
            fontSize: '16px',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: '#007bff',
            color: '#fff',
            cursor: 'pointer',
          }}
        >
          Search
        </button>
      </div>
    </header>
  );
};

export default SearchBarHeader;
