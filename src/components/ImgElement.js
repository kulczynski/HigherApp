import React from 'react';

function ImgElement(props) {
    
    const {url} = props;
    return (                                        
    <li>
      {
        <img width="10%" src={url!=='7ALI0RYyq6s'? `http://source.unsplash.com/${url}` : 'https://picsum.photos/id/1024/1920/1280'} alt={`images url: ${url}`}/>
      }
    </li>
  );
    }
  export default ImgElement;