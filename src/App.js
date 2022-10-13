import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import View from './Pages/View';
import Library from './Pages/Library';
import Album from './Pages/Album';

const App = () => {
  return (
    <div>
 <Routes>
    <Route path='/' element={<View />}/>
    <Route path='/Library' element={<Library />}/>
    <Route path='/Album' element={<Album />}/>
 </Routes>
    </div>
  )
}

export default App