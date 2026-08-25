import React from 'react';

interface MyButtonProps {
  label: string;
  onPress: () => void;
  color?: string;
}

const MyButton = ({
  label,
  onPress,
  color = 'blue',
}: MyButtonProps) => {
  return (
    <button
      onClick={onPress}
      style={{
        backgroundColor: color,
        color: 'white',
        padding: '12px 24px',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '16px',
        margin: '10px',
      }}
    >
      {label}
    </button>
  );
};

function App() {
  const handleClick = () => {
    alert('Bạn đã bấm nút!');
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <MyButton
        label="Nút mặc định"
        onPress={handleClick}
      />

      <MyButton
        label="Nút màu đỏ"
        color="red"
        onPress={() => alert('Bạn đã bấm nút đỏ!')}
      />
    </div>
  );
}

export default App;