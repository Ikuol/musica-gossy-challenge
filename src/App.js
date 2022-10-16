import React from 'react';
import {Route, Routes} from 'react-router-dom';
import { View, Library, Album } from './Pages';
import './App.css';

const App = () => {
  return (
    <div>
 <Routes>
    <Route path='/' element={<View />}/>
    <Route path='/Library' element={<Library />}/>
    <Route path='/Album/:i' element={<Album />}/>
 </Routes>
    </div>
  )
}

export default App