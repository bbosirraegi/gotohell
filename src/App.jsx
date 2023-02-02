import React from 'react';

const App = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '20%',
          textAlign: 'center',
          borderRight: '1px solid lightgray',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        A
      </div>
      <div
        style={{
          width: '40%',
          textAlign: 'center',
          borderRight: '1px solid lightgray',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        B
      </div>
      <div
        style={{
          width: '40%',
          textAlign: 'center',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        C
      </div>
    </div>
  );
};

export default App;
