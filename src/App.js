import React from 'react';
import { BrowserRouter as Router, Route, useRoutes } from 'react-router-dom';
import Home from './components/home';
import AddUser from './components/addUser';
import EditUser from './components/editUser';
import 'bootstrap/dist/css/bootstrap.min.css'
import { GlobalProvider } from './Context/GlobalState';


function Appinit() {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/add", element: <AddUser /> },
    { path: "/edit/:id", element: <EditUser /> },
  ]);
  return routes;

};

function App() {
  return (
    <GlobalProvider>
      <div style={{ maxWidth: "30rem", margin: "4rem auto" }} >
        <Router>
          <Appinit />
        </Router>
      </div>
    </GlobalProvider>
  );
}

export default App;
