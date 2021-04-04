import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from './Routes/auth';
import Routes from './Routes';


function App () {
  return(
    <BrowserRouter>
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App;
