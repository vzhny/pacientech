import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import '@/styles/scss/base.scss';
import 'bootswatch/dist/lux/bootstrap.min.css';
import App from '@/containers/App/App';

axios.defaults.baseURL = 'https://pacientech.herokuapp.com/api';

ReactDOM.render(<App />, document.getElementById('app-root'));
