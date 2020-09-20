import React from 'react';

function ImgBtn(props) {
    
    const {counter, dispatch,typeFunction ,startValue, mainValue} = props;


    return (                                        
        <button className="btn" onClick={() => dispatch({type: typeFunction,counter})}>
        {
        counter === null ? 
        startValue
        :
        mainValue
        }
      </button> 
  );
    }
  export default ImgBtn;