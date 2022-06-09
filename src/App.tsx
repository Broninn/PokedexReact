import React from 'react';
import { QueryClient, QueryClientProvider  } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import {BrowserRouter as Router} from "react-router-dom";
import RoutesPoke from './routes';

const queryClient = new QueryClient()

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <Router>
          <RoutesPoke />
        </Router>
      </>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
