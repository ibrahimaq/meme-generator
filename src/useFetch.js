import { useEffect, useState } from "react";

const useFetch = (url) => {



  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  const [memes, setMemes] = useState(null);

    useEffect(()=>{
        fetch(url)
         .then(res=>res.json())
         .then(res =>{
             const data = res.data.memes;
             setMemes(data);
             setIsLoading(false);
             
         })
         .catch(err=>{
             console.log(err);
             setIsError(true);
         })
    },[url])

  return ({memes, isLoading, isError});
};

export default useFetch;

//   const getMemes = async (url) => {
//     try{
//     const getData = await fetch(url);
//     const res = await getData.json();
//     setMemes(res);
//     setIsLoading(false);
//     console.log(memes);
//     }
//     catch (err){
//         console.log(err);
//         setIsError(true);
//     }
//   }

//   useEffect(()=>{
//     getMemes(url)
// }, [getMemes])