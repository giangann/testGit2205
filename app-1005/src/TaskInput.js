import { Input } from "antd";
import React, {useState} from "react";


function TaskInput({handleAddTask}) {
  const [inputValue, setValue] = useState("")
  
  const handlePressEnter = () =>{
    if (inputValue === "")
      return
    handleAddTask(inputValue) // cho inputValue vao danh sach task, sau do lam sach vung nhap task
    setValue("")
  }
 
  const handleOnChange = (e) =>{ 
    setValue(e.target.value)
  }
  
  //if don't have "onchange" method, if have keyboard input, state change and app render again
  // e: event object, each modify when type in form catch by e.target.value and modify inputvalue by setValue
  return <Input placeholder="Nhập tên task rồi ấn enter" value={inputValue} onChange = {handleOnChange} onPressEnter={handlePressEnter} />;
}

export default TaskInput;