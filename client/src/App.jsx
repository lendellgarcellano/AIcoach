import React, { useState } from 'react';
import GoalInput from './components/GoalInput';
import FeedbackDisplay from './components/FeedbackDisplay';

export default function App() {
  const [feedback, setFeedback] = useState('');
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Daily AI Personal Coach</h1>
      <GoalInput setFeedback={setFeedback} />
      <FeedbackDisplay feedback={feedback} />
    </div>
  );
}
