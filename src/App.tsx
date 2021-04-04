import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from './Routes/auth';
import MainRoutes from './Routes';


function App () {
  return(
    <BrowserRouter>
      <AuthProvider>
        <MainRoutes/>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App;
