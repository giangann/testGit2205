import React from "react";
import {useState} from "react";
import { Checkbox } from "antd";
import classes from "./Status.module.css";

function App () {
  const arr = [4,3,6,1]
  arr.sort((a,b)=> b-a)

  const day = new Date()
  console.log(day)

  return(
    <div>
      <div>{day.toDateString()}</div> 
      <div> {typeof(day)}</div>

    </div>
     
  )
}
export default App;