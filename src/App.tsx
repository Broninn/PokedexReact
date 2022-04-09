import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import RoutesPoke from './routes';


const App: React.FC = () => {
  return (
    <>
      <Router>
        <RoutesPoke />
      </Router>
    </>
  )
}

export default App;
