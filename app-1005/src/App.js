import "antd/dist/antd.css";
import TaskInput from "./TaskInput";
import Title from "antd/lib/typography/Title";
import TodoList from "./TodoList";
import React, { useState } from "react";
import MockTask from "./MockTasks";
import { v4 as uuidv4 } from 'uuid';
import classes from "./App.module.css";
import _ from 'lodash'

function App() {
  const [taskList, setTaskList] = useState(MockTask);

  const changeStatus = (id, value) => {

    const newTasklist = //tasklist la danh sach tat ca cac task dang co
      taskList.map(el => el.id === id ? { ...el, isCompleted: value, completedDate: (value)? new Date() : ""} : el);
    setTaskList(newTasklist)

  }

  const tasksNotCompleted = _.orderBy(taskList.filter(e => e.isCompleted == false), ['createdDate'], ['desc'])
  
  const tasksCompleted = _.orderBy(taskList.filter(e => e.isCompleted == true), ['completedDate'], ['desc'])

  const handleAddTask = (newTaskName) => {
    setTaskList([...taskList, { taskName: newTaskName, id: uuidv4(), isCompleted: false,createdDate:new Date() }]);
  }
  return (
    <div className={classes.app}>
      <Title className={classes.header}>Todo app</Title>

      <div className={classes.taskInputContainer}>
        <TaskInput handleAddTask={handleAddTask}/>
      </div>

    <section>
      <div className = {classes.todoContainer}>
      <Title level={3}>Danh sách task</Title>
        <TodoList changeStatus={changeStatus} taskList={tasksNotCompleted} />
        <Title level={3}>Danh sách task hoàn thành</Title>
        <TodoList changeStatus={changeStatus} taskList={tasksCompleted} />      
      </div>
    </section>
    </div>
  );
}

export default App;



