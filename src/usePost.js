import { useState } from "react";
import { useNavigate } from "react-router-dom";
const usePost = () => {
  const [isFetching, setIsfetching] = useState(false);
  const navigate = useNavigate();

  const getMeme = async (formData) => {
    try {
      setIsfetching(true);
      const postRequest = await fetch("https://api.imgflip.com/caption_image", {
        method: "POST",
        body: formData,
      });
      if (!postRequest.ok) {
        throw new Error(`Error: `);
      }
      const res = await postRequest.json();
      const data = res;
      navigate("/completed-meme",{state: data});
    } catch (err) {
      console.log(err);
    }
  };


  

  return { getMeme, isFetching };
};

export default usePost;



  // const getMeme = (formData) =>{
  //   fetch("https://api.imgflip.com/caption_image", {
  //     method: "POST",
  //     body: formData
  //   })
  //   .then(res=>res.json())
  //   .then(res=>{
  //     const data = res;
  //     console.log(data);
  //     setMyMeme(data);
  //     console.log(myMeme);
    
  //   })
  //   .catch(err=>{
  //     console.log(err);
  //   })
  // }