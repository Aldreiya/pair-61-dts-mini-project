import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { Box, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import PrivateComponent from './components/PrivateComponent';
import About from './containers/About';
import Login from './containers/Login';
import MovieList from './containers/MovieList';
import NotFound from './containers/NotFound';
import Pricing from './containers/Pricing';
import Register from './containers/Register';
import Subscribed from './containers/Subscribed';
import MovieDetails from './containers/MovieDetails';
import theme from './themes/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            // <PrivateComponent>
            <App />
            // </PrivateComponent>
          }>
            <Route path="/" element={<MovieList />} />
            <Route path="movie-details/:id" element={<MovieDetails />} />
            <Route path="subscribed/:plan" element={<Subscribed />} />
          </Route>
          <Route path="login" element={
            // <PrivateComponent loginOnly={false}>
            <Login />
            // </PrivateComponent>
          } />
          <Route path="register" element={
            // <PrivateComponent loginOnly={false}>
            <Register />
            /* </PrivateComponent> */
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter></ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
