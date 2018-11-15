import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import '../../public/scss/main.scss';
import '../../public/scss/preloader.scss';

const app = document.getElementById('app');

ReactDOM.render(
<BrowserRouter>
  <AppRoutes />
</BrowserRouter>,
app
);
