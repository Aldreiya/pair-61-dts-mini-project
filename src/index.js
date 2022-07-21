import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import PrivateComponent from './components/PrivateComponent';
import Login from './containers/Login';
import MovieList from './containers/MovieList';
import NotFound from './containers/NotFound';
import Register from './containers/Register';
import MovieDetails from './containers/MovieDetails';
import theme from './themes/theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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
          </Route>
          <Route path="movie-details/:id" element={
            <PrivateComponent>
              <Navbar />
              <MovieDetails />
              <Footer/>
            </PrivateComponent>
          } />
          <Route path="login" element={
            <PrivateComponent loginOnly={false}>
              <Login />
            </PrivateComponent>
          } />
          <Route path="register" element={
            <PrivateComponent loginOnly={false}>
              <Register />
            </PrivateComponent>
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
