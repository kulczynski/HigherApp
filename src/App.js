import React from 'react';
import ImgElementList from './components/ImgElementList';
import UrlContextProvider from './context/UrlContext';
import CounterContextProvider from './context/CounterContext';
import './style.scss';


function App() {  
  
  return (                                        
    <div className="App">
      <UrlContextProvider>
        <CounterContextProvider>
          <ImgElementList /> 
        </CounterContextProvider>
      </UrlContextProvider>      
    </div>
  );
}

export default App;
