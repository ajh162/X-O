import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "./Assets/Login/Login.js";
import { LogoutButton } from "./Assets/Logout/Logout.js";
import { Profile } from "./Assets/Profile/Profile.js";
import React from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { PrimeReactProvider} from 'primereact/api';
import { Routes, Route } from 'react-router-dom';
import Topbar from './Assets/Components/Topbar/Topbar';
import Dashboard from './Assets/Components/Dashboard/Dashboard';
import './App.css';

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <PrimeReactProvider>
      <div className="App">
      {isAuthenticated ? (
          <>
            <Topbar />
            <Routes>
              <Route path="/Dashboard" element={<Dashboard />} />
              {/* Agrega más rutas aquí */}
            </Routes>
            <Profile />
            <LogoutButton />
          </>
        ) : (
          <LoginButton />
        )}
      </div>
    </PrimeReactProvider>
  );
}

export default App;
