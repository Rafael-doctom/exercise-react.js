import React from 'react'
import './App.js';

import ExerciseOne from '../src/pages/exerciseOne/exerciseOne';
import ExerciseTwo from '../src/pages/exerciseTwo/ExerciseTwo';
import ExerciseThree from './pages/exerciseThree/ExerciseThree.js';
import ExerciseFour from './pages/exerciseFour/ExerciseFour.js';
import ExerciseFive from './pages/exerciseFive/ExerciseFive.js';
import ExerciseSix from './pages/exerciseSix/ExerciseSix';
import ExerciseSeven from './pages/exerciseSeven/ExerciseSeven.js';
import ExerciseEight from './pages/exerciseEight/ExerciseEight.js';
import ExerciseNine from './pages/exerciseNine/ExerciseNine.js';

function App() {


  return (
    <>
      <ExerciseOne />
      <ExerciseTwo />
      <ExerciseThree />
      <ExerciseFour />
      <ExerciseFive />
      <ExerciseSix />
      <ExerciseSeven 
        TextProps ='passando texto como propriedade...'
      />
      <ExerciseEight />
      <ExerciseNine />
    </>
  );
}

export default App;