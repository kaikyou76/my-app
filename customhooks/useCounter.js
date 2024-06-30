import { useCallback, useState } from 'react'

export const useCounter = () => {
    const[bar, setBar] = useState(1);
    const[isShow, setIsShow] = useState(true);
    const handleClick = useCallback((e) =>{
      console.log(bar); 
        setBar((prevBar) => prevBar + 1);
    },[bar]);
    const handleDisplay = useCallback(() => {
      setIsShow((prevIsShow) => {
        console.log(prevIsShow);//打印前一次状态
        if (prevIsShow){
          return false;
        }else{return true;}
      });
    },[]);
    return {bar, isShow, handleClick, handleDisplay};
  }