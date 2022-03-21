import {useLocation} from "react-router-dom"

const CompletedMeme = () => {

    const {state} = useLocation();

    return ( 
        <>
            
            
            <img src={state.data.url} alt="Custom meme" />
            
            
        </>
     );

}
 
export default CompletedMeme;