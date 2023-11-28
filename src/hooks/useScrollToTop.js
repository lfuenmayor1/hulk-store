import { useEffect } from "react";
import { useSelector } from 'react-redux';


export  function useScrollToTop() {

    const{ msgError} = useSelector(state => state.ui);
    
    useEffect(() => {
        if(msgError !== null){
            window.scrollTo(0, 0);
        }
       
    }, [msgError]);

  return null;
}