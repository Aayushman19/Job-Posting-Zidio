import React, { useState, useEffect } from 'react';

const API_URL = 'https://jobs-api19.p.rapidapi.com/jobs?limit=10';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '70eb31faa0msh7d050807db2aaa4p1212bejsnbc5a59d3a4c6',
		'x-rapidapi-host': 'jobs-api19.p.rapidapi.com'
	}
};

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(API_URL, options);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="job-list">
      <h1>Job Postings</h1>
      <ul>
        {jobs.map((job) => (
          <li key={job.id} className="job-item">
            <h2>{job.title}</h2>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Location:</strong> {job.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
