import React from 'react'
import News from './components/News'
import { NewsContextProvider } from './NewsContext'
import './css/app.css';
import Top from './components/Top';
import Catpanel from './Catpanel';

function App() {
  return( 
    
  <NewsContextProvider>
    <Top/>
    <Catpanel/>
    <News/>
  </NewsContextProvider>
  )
}


export default App