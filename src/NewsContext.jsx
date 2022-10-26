import React, {createContext, useEffect, useState} from 'react'
import axios from 'axios'
export const NewsContext = createContext()

export const NewsContextProvider = (props) => {
    const [data,setData]= useState()
    const apiKey = "7519dfcfb96141c48b97c8f63822801e";

    useEffect(()=>{
        axios.get(
            'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7519dfcfb96141c48b97c8f63822801e'
        )
        .then((response) => setData(response.data))
        .catch((error)=>console.log(error));
    },[])


  return (
    <NewsContext.Provider value={{data}}>
        {props.children}
    </NewsContext.Provider>

  );
};
