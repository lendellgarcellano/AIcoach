import React from 'react';

export default function FeedbackDisplay({ feedback }) {
  if (!feedback) return null;
  return (
    <div className="mt-4 p-4 bg-white rounded shadow w-full max-w-md">
      <h2 className="font-bold mb-2">AI Coach Feedback:</h2>
      <p>{feedback}</p>
    </div>
  );
}
