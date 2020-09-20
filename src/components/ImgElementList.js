import React, { useContext } from 'react';
import ImgElement from './ImgElement';
import PlaceholderContainer from './PlaceholderContainer';
import ImgBtn from './ImgBtn';
import { UrlContext } from '../context/UrlContext';
import { CounterContext } from '../context/CounterContext';

function ImgElementList() {
    
  const {cutedUrl} = useContext(UrlContext);
  const { counter, dispatch } = useContext(CounterContext)
  
    return (         
    <>
      <div>                               
      <ImgBtn  counter={counter} dispatch={dispatch} typeFunction='DECREASE_COUNTER' 
        startValue='Start here' mainValue='Previous'/>
      <ImgBtn  counter={counter} dispatch={dispatch} typeFunction='INCREASE_COUNTER' 
        startValue='Or here' mainValue='Next'/>      
      </div>
    <ul className="imgList">
      {
        counter === null ? 
        <PlaceholderContainer />
        :
        cutedUrl.map((url, ind) => {
        return <ImgElement key={ind} url={url[counter]} className={counter}/>
      })
      }
    </ul>
    </>
  );
    }
  export default ImgElementList;