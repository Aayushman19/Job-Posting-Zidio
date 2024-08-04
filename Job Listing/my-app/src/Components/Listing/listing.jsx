import React from 'react';

// Sample data
const jobPostings = [
  { id: 1, title: 'Software Engineer', company: 'TechCorp', location: 'San Francisco, CA' },
  { id: 2, title: 'Product Manager', company: 'Innovate Inc.', location: 'New York, NY' },
  { id: 3, title: 'UX Designer', company: 'DesignWorks', location: 'Austin, TX' },
  // Add more job postings here
];

const JobList = () => {
  return (
    <div className="job-list">
      <h1>Job Postings</h1>
      <ul>
        {jobPostings.map((job) => (
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