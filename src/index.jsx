import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import Team from './routes/team';
import End from './routes/end';
import Reveal from './routes/reveal';
import ErrorPage from './pages/error';
import './App.css';
import logo from './assets/logo.svg';
import { Box } from '@mui/material';
import { Header } from './components/Header';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  mode: 'dark',
  palette: {
    primary: {
      main: '#1994e2',
    },
    secondary: {
      main: '#d81e1e',
    },
    warning: {
      main: '#7fb3c1',
    },
    error: {
      main: '#a9a9a9',
    },
    text: {
      primary: '#fff',
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/:team/:questionId',
    element: <Team />,
  },
  {
    path: '/:team/end',
    element: <End />,
  },
  {
    path: '/:team/reveal',
    element: <Reveal />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Box
        className="App"
        sx={{ background: '#282c34', '&.game .App-logo': { display: 'none' } }}
      >
        <Header logo={logo} />
        <RouterProvider router={router} />
      </Box>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
