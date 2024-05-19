import React, { useState, useCallback } from 'react';

export default function Cau6() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = useCallback(() => {
    console.log("Email:", email);
    console.log("Password:", password);
  }, [email, password]);

  return (
    <div>
      <h2>Câu 6</h2>
      <label>Email:</label>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <label>Password:</label>
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
