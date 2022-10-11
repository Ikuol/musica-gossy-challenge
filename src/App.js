import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import View from './Pages/View';
import Library from './Pages/Library';

const App = () => {
  return (
    <div>
 <Routes>
    <Route path='/' element={<View />}/>
    <Route path='/Library' element={<Library />}/>
 </Routes>
    </div>
  )
}

export default App