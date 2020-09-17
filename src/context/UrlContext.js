import React, { createContext, useState, useEffect } from 'react';

export const UrlContext = createContext();

const UrlContextProvider = (props) => {
    const [cutedUrl, setCutedUrl] = useState([]);
  
    useEffect(() => { 
        fetch('https://picsum.photos/v2/list')
        .then(res => res.json())
        .then(data => {
          let urls=data.map(elm => {
            return elm.url.slice(28, elm.url.length)
            });
            let divided = urls.reduce((all,one,i) => {
              const ch = Math.floor(i/10); 
              all[ch] = [].concat((all[ch]||[]),one); 
              return all
           }, [])
          setCutedUrl(divided)})
        .catch(err => console.log(err)); 
    }, []);

  return (
    <UrlContext.Provider value={{cutedUrl}}>
      {props.children}
    </UrlContext.Provider>
  )
}

export default UrlContextProvider;