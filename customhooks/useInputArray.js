import { useCallback, useState } from 'react'

export const useInputArray = () => {
    const[text, setText] = useState("a");
    const[array, setArray] = useState([1,2,3]);
    const handleChange = useCallback((e) => {
      console.log(text);
      if (e.target.value.length > 5) {
        alert("输入不能超过5个字符");
        return;
      }
      setText(e.target.value.trim());
    },[]);
  
    const handleAdd = useCallback(()=>{
      setArray((prevArray) =>{
        console.log(prevArray);
        if(prevArray.some((item) => item === text)){
          alert("相同数组元素已经存在！");
          return prevArray;
        }
        const newArray = [...prevArray, text];
        return newArray;
      });
    },[text]);
    return {text, array, handleChange, handleAdd};
  }