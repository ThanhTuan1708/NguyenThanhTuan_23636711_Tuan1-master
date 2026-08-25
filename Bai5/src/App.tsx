import React, { useState } from 'react';

function App() {
  const [text, setText] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <h2>Live Input</h2>

      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Nhập nội dung..."
        style={{
          width: '300px',
          padding: '12px',
          fontSize: '16px',
          borderRadius: '8px',
          border: '1px solid gray',
        }}
      />

      <p>Số lượng ký tự: {text.length}</p>
    </div>
  );
}

export default App;