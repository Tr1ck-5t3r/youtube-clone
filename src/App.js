import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Channel from './components/Channel';
import Video from './components/Video';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
          <Routes>
              {/*<div class="next">
               <div className='side__bar'>
                <Sidebar/>
              </div>
              <div className='video__section'>
                <VideoSection/>
              </div>
  </div>*/}
              <Route path='/' element={<Feed/>}/>
              <Route  path='/video/:id' element={<Video/>}/>
              <Route path='/channel/:id' element={<Channel/>}/>
              <Route path='/search/:search_term' element={<Search/>}/>
          </Routes> 
        {/**/}
      </BrowserRouter>
    </div>
    
  );
}

export default App;
