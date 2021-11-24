import React from 'react';
import Navbar from './components/Navbar';

import styled from 'styled-components';

const ContenedorPrincipal = styled.div`
  height: 100vh;
`

function App() {
  return (
    <ContenedorPrincipal>
      <Navbar />
    </ContenedorPrincipal>
  );
}

export default App;
