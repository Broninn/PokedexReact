import React from 'react';
import { QueryClient, QueryClientProvider  } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import {BrowserRouter as Router} from "react-router-dom";
import { FavoriteProvider } from './favorites/contexts/FavoriteContext';
import Routes from './routes';
import RoutesPoke from './routes';

interface AppProps {

}

const queryClient = new QueryClient()

const App: React.FC<AppProps> = () => {
  return (
    <QueryClientProvider client={queryClient}>
        <FavoriteProvider>
          <Router>
            <Routes />
          </Router>
        </FavoriteProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
