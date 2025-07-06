import React, { useState } from 'react';
import SubmitMainContent from '../../Submit';
import TrackMainContent from '../../Track';

const SubmissionDashboard = () => {
  const [submissions, setSubmissions] = useState([]);

  const handleAddSubmission = (submissionData) => {
    const newSubmission = {
      id: Date.now(),
      title: submissionData.title,
      date: new Date().toISOString().split('T')[0], // Format: YYYY-MM-DD
      status: 'Submitted',
    };
    setSubmissions((prev) => [newSubmission, ...prev]);
  };

  return (
    <>
      {/* Pass the handleAddSubmission function to SubmitMainContent as a prop */}
      <SubmitMainContent onSubmitArticle={handleAddSubmission} />
      <TrackMainContent submissions={submissions} />
    </>
  );
};

export default SubmissionDashboard;
