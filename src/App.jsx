import React from 'react'
import News from './components/News'
import { NewsContextProvider } from './NewsContext'
import './css/app.css';
import Top from './components/Top';

function App() {
  return( 
    
  <NewsContextProvider>
    <Top/>
    <News/>
  </NewsContextProvider>
  )
}


export default App