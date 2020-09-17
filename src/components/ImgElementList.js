import React, { useContext } from 'react';
import ImgElement from './ImgElement';
import { UrlContext } from '../context/UrlContext';
import { CounterContext } from '../context/CounterContext';

function ImgElementList() {
    
  const {cutedUrl} = useContext(UrlContext);
  const { counter, dispatch } = useContext(CounterContext)
  
    return (                                        
    <ul className="Img">
      <button onClick={() => dispatch({type: 'INCREASE_COUNTER',counter})}>Next</button>
      <button onClick={() => dispatch({type: 'DECREASE_COUNTER',counter})}>Previous</button>
      {
        counter === null ? 
        <div><h1>Please click and fire first tree images :)</h1></div> 
        :
      cutedUrl.map((url, ind) => {
        return <ImgElement key={ind} url={url[counter]} />
      })}
    </ul>
  );
    }
  export default ImgElementList;