import React from 'react';
import {Route, Routes} from 'react-router-dom';
import { View, Library, Album, Lyrics } from './Pages';
import { Index } from './components';
import './App.css';

const App = () => {
  return (
    <div>
      <div>
        {/* Router */}
        <Routes>
            <Route path='/' element={<View />}/>
            <Route path='/Library' element={<Library />}/>
            <Route path='/Album/:chartId' element={<Album />}/>
            <Route path='/Lyrics/:i' element={<Lyrics />}/>
        </Routes>
      </div>
      <Index />
    </div>
  )
}

export default App