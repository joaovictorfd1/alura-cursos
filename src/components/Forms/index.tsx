import React, { useState } from 'react';
import { ITasks } from '../../types/task';
import Button from '../Button';
import style from './styles.module.scss';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  setTasks: React.Dispatch<React.SetStateAction<ITasks[]>>
}

function Forms({ setTasks }: Props) {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("00:00")

  function saveTasks(e: React.FormEvent) {
    e.preventDefault()
    setTasks(oldTasks =>
      [
        ...oldTasks,
        {
          task,
          time,
          selected: false,
          complete: false,
          id: uuidv4()
        }
      ]
    );
    setTask("")
    setTime("00:00")
  }

  return (
    <form className={style.novaTarefa} onSubmit={saveTasks}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">
          Adicione um novo estudo
        </label>
        <input
          type="text"
          name="tarefa"
          id="task"
          placeholder="O que você quer estudar"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">
          Tempo
        </label>
        <input
          type="time"
          step="1"
          name="tempo"
          id="time"
          min="00:00:00"
          max="01:30:00"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </div>
      <Button type="submit">
        Adicionar
      </Button>
    </form >
  )
}


export default Forms

