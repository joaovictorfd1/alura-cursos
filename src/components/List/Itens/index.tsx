import { ITasks } from '../../../types/task';
import style from './styles.module.scss';

interface Props extends ITasks {
  selectedTask: (taskSelected: ITasks) => void
}

export default function Item(
  {
    task,
    time,
    complete,
    selected,
    id,
    selectedTask
  }: Props) {
  return (
    <li
      className={`${style.item} ${selected ? style.itemSelecionado : ''} ${complete ? style.itemCompletado : ''}`}
      onClick={() => !complete && selectedTask({
        task,
        time,
        complete,
        selected,
        id
      })}
    >
      <h3>{task}</h3>
      <span>{time}</span>
      {complete && <span className={style.concluido}></span>}
    </li>
  )
}