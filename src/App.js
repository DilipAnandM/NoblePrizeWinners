import logo from './logo.svg';
import './App.css';
import DisplayContent from './firstpage';
import MainPage from './mainpage';

import React, {Component, useState} from 'react';
import { BrowserRouter as Router,Route,Switch,Link, BrowserRouter} from 'react-router-dom';
import { render } from '@testing-library/react';



function App() {
  return (
    <div className="App">
      
      {/* <MainPage /> */}
      <DisplayContent />
    </div>
  );
}

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <Switch>
//           <Route exact path="/">
//             <MainPage />
//           </Route>
//           <Route exact path="/Nobel">
//             <DisplayContent />
//           </Route>
//         </Switch>
//         </div>
//     </BrowserRouter>
//   );
// }


export default App;
