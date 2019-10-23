import React from 'react';
import { render } from 'react-dom';

import { App } from './App';
import 'bootstrap/dist/css/bootstrap.min.css'

// setup fake backend
// import { configureFakeBackend } from './_helpers';
// configureFakeBackend();

render(
    <App />,
    document.getElementById('app')
);