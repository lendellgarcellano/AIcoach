import React, { useState } from 'react';

export default function GoalInput({ setFeedback }) {
  const [goal, setGoal] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/submit-goal', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ goal }),
    });
    const data = await response.json();
    setFeedback(data.feedback);
    setGoal('');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-2">
      <input
        type="text"
        placeholder="Enter your daily goal"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        className="p-2 rounded border border-gray-300"
        required
      />
      <button className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
        Get AI Advice
      </button>
    </form>
  );
}
