import React from 'react'
import './App.js';

import UserContext from './UserContext'

import ExerciseOne from '../src/pages/01exerciseOne/exerciseOne';
import ExerciseTwo from '../src/pages/02exerciseTwo/ExerciseTwo';
import ExerciseThree from './pages/03exerciseThree/ExerciseThree.js';
import ExerciseFour from './pages/04exerciseFour/ExerciseFour.js';
import ExerciseFive from './pages/05exerciseFive/ExerciseFive.js';
import ExerciseSix from './pages/06exerciseSix/ExerciseSix';
import ExerciseSeven from './pages/07exerciseSeven/ExerciseSeven.js';
import ExerciseEight from './pages/08exerciseEight/ExerciseEight.js';
import ExerciseNine from './pages/09exerciseNine/ExerciseNine.js';
import ExerciseTen from './pages/10exerciseTen/ExerciseTen.js';
import ExerciseEleven from './pages/11exerciseEleven/ExerciseEleven.js';
import ExerciseTwelve from './pages/12exerciseTwelve/ExerciseTwelve.js';
// import ExerciseThirteen from './pages/13exerciseThirteen/ExerciseThirteen.js';
import ExerciseFourteen from './pages/14exerciseFourteen/ExerciseFourteen';
import ExerciseFifteen from './pages/15exerciseFifteen/ExerciseFifteen.js';
import ExerciseSixteen from './pages/16exerciseSixteen/ExerciseSixteen'
import ExerciseSeventeen from './pages/17exerciseSeventeen/ExerciseSeventeen.js';
import ExerciseEighteen from './pages/18exerciseEighteen/ExerciseEighteen';

import ExerciseTwenty from './pages/20exerciseTwenty/ExerciseTwenty.js';
import ExerciseTwentyOne from './pages/21exerciseTwentyOne/ExerciseTwentyOne.js';
import ExerciseTwentyTwo from './pages/22exerciseTwentyTwo/ExerciseTwentyTwo.js';
import ExerciseTwentyThree from './pages/23exerciseTwentyThree/ExerciseTwentyThree.js';
import { ExerciseTwentyFour } from './pages/24exerciseTwentyFour/ExerciseTwentyFour.js';
import {ExerciseTwentyFive} from './pages/25exerciseTwentyFive/ExerciseTwentyFive'



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
        <ExerciseTwentyTwo /> {/* useState & useEffect & Sum Input*/}
        <ExerciseTwentyThree />
        <ExerciseTwentyFour />
        <ExerciseTwentyFive />
      </UserContext.Provider>
    </>
  );
}

export default App;