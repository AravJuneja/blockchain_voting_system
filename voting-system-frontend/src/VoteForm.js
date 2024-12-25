import React, { useState } from 'react';

const VoteForm = () => {
  const [vote, setVote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`You voted for: ${vote}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Choose your candidate:
        <select value={vote} onChange={(e) => setVote(e.target.value)}>
          <option value="">Select</option>
          <option value="Trump">Trump</option>
          <option value="Kamala">Kamala</option>
        </select>
      </label>
      <button type="submit">Vote</button>
    </form>
  );
};

export default VoteForm;
