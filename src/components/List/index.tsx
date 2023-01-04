import style from './styles.module.scss';
import Item from './Itens';
import { ITasks } from '../../types/task'

interface Props {
  tasks: ITasks[]
  selectedTask: (taskSelected: ITasks) => void
}


function List({ tasks, selectedTask }: Props) {

  return (
    <aside>
      <h2> Estudos do dia </h2>
      <ul className={style.listaTarefas}>
        {tasks.map((item, index) => (
          <Item
            selectedTask={selectedTask}
            key={item.id}
            id={item.id}
            complete={item.complete}
            selected={item.selected}
            task={item.task}
            time={item.time}
          />
        ))}
      </ul>
    </aside>
  )
}

export default List;
