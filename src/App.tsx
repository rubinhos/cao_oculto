import './App.css';

import { FC } from 'react';

import Home from './app/home/Home';
import Puzzle from './app/puzzle/Puzzle';

const COMPONENT_ID = 'app';

const App: FC = () => {
  return (
    <div id={COMPONENT_ID} className={`${COMPONENT_ID} slider`}>
      <Home />
      <Puzzle />
    </div>
  );
};

export default App;
