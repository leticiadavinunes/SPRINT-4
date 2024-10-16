import React from 'react';


function Home() {
  const divStyle = {
    width: '100vw', 
    height: '1024px',
    backgroundColor: 'white',
    boxSizing: 'border-box' as const,
    borderTop: '80px solid #D9EDB1',
    borderRight: '80px solid #D9EDB1',
    borderLeft: '80px solid #D9EDB1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const divStyle2 = {
    width: '100%', 
    height: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-end', 
    display: 'flex',
    borderRadius: '20px',
    marginTop: '-40px',
    paddingRight: '20px',
  };

  return (
    <div className='1'style={divStyle}>
      <div className='2'style={divStyle2}>
      <img src="src\assets\Pages\images\maca.png" alt="Maça" style={{ width: '1000px', height: '900px', marginLeft: '-50px' }} />
      </div>
    </div>
  );
}

export default Home;
