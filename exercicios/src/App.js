import React from 'react'
import './App.js';

import UserContext from './UserContext'

import ExerciseOne from '../src/pages/exerciseOne/exerciseOne';
import ExerciseTwo from '../src/pages/exerciseTwo/ExerciseTwo';
import ExerciseThree from './pages/exerciseThree/ExerciseThree.js';
import ExerciseFour from './pages/exerciseFour/ExerciseFour.js';
import ExerciseFive from './pages/exerciseFive/ExerciseFive.js';
import ExerciseSix from './pages/exerciseSix/ExerciseSix';
import ExerciseSeven from './pages/exerciseSeven/ExerciseSeven.js';
import ExerciseEight from './pages/exerciseEight/ExerciseEight.js';
import ExerciseNine from './pages/exerciseNine/ExerciseNine.js';
import ExerciseTen from './pages/exerciseTen/ExerciseTen.js';
import ExerciseEleven from './pages/exerciseEleven/ExerciseEleven.js';
import ExerciseTwelve from './pages/exerciseTwelve/ExerciseTwelve.js';
// import ExerciseThirteen from './pages/exerciseThirteen/ExerciseThirteen.js';
import ExerciseFourteen from './pages/exerciseFourteen/ExerciseFourteen';
import ExerciseFifteen from './pages/exerciseFifteen/ExerciseFifteen.js';
import ExerciseSixteen from './pages/exerciseSixteen/ExerciseSixteen'
import ExerciseSeventeen from './pages/exerciseSeventeen/ExerciseSeventeen.js';
import ExerciseEighteen from './pages/exerciseEighteen/ExerciseEighteen';

import ExerciseTwenty from './pages/exerciseTwenty/ExerciseTwenty.js';
import ExerciseTwentyOne from './pages/exerciseTwentyOne/ExerciseTwentyOne.js';

function App() {


  return (
    <>
      <UserContext.Provider value={{nome: 'Rafael'}}>
        <ExerciseOne />
        <ExerciseTwo />
        <ExerciseThree />
        <ExerciseFour />
        <ExerciseFive />
        <ExerciseSix />
        <ExerciseSeven
          TextProps='passando texto como propriedade...'
        />
        <ExerciseEight />
        <ExerciseNine />
        <ExerciseTen />
        <ExerciseEleven />
        <ExerciseTwelve />
        {/* <ExerciseThirteen /> */}
        <ExerciseFourteen />
        <ExerciseFifteen />
        <ExerciseSixteen />
        <ExerciseSeventeen />
        <ExerciseEighteen />

        <ExerciseTwenty />
        <ExerciseTwentyOne />
      </UserContext.Provider>
    </>
  );
}

export default App;