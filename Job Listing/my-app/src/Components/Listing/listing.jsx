import React, { useState } from 'react';

const ListingPage = () =>{
    const[listing, searchedListing] = useState('');

    const handleChange = (event) => {
        searchedListing(event.target.value);
    };

    const handleSearch = () => {
        console.log('Searching for:', listing);
    };
}

export default ListingPage;