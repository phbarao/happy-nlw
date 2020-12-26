import React from 'react';
import * as dotenv from 'dotenv';

import './styles/global.css';
import Routes from './routes';

dotenv.config();

function App() {
  return <Routes />;
}

export default App;
