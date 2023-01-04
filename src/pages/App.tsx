import React, { useState } from 'react';
import Forms from '../components/Forms';
import List from '../components/List';
import StopWatch from '../components/Stopwatch';
import { ITasks } from '../types/task';
import style from './styles.module.scss';

function App() {
  const [tasks, setTasks] = useState<ITasks[]>([])
  const [selected, setSelected] = useState<ITasks>()

  function selectedTask(taskSelected: ITasks) {
    setSelected(taskSelected)
    setTasks(oldTasks => oldTasks.map(task => ({
      ...task,
      selected: task.id === taskSelected.id ? true : false
    })));
  }

  function doneTask() {
    if(selected) {
      setTasks(oldTasks => oldTasks.map(task => {
        if(task.id === selected.id) {
          return {
            ...task,
            selected: false,
            complete: true
          }
        }
        return task;
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Forms setTasks={setTasks}/>
      <List
      tasks={tasks}
      selectedTask={selectedTask}
      />
      <StopWatch
      doneTask={doneTask}
      selected={selected}
      />
    </div>
  );
}

export default App;
