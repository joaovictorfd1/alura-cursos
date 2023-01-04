import { useState, useEffect } from 'react'
import Button from "../Button"
import Clock from "./Clock"
import style from './styles.module.scss';
import { timeForSeconds } from "../../common/utils/time";
import { ITasks } from "../../types/task";

interface Props {
   selected?: ITasks
   doneTask: () => void
}

export default function StopWatch({ selected, doneTask }: Props) {

   const [time, setTime] = useState<number>();

   useEffect(() => {
      if (selected?.time) {
         setTime(timeForSeconds(selected.time))
      }
   }, [selected])

   function regressTime(cont: number = 0) {
      setTimeout(() => {
         if (cont > 0) {
            setTime(cont - 1);
            return regressTime(cont - 1)
         }
         doneTask();
      }, 1000);
   }

   return (
      <div className={style.cronometro}>
         <p className={style.titulo}> Escolha um card e inicie o cronômetro </p>
         Tempo: {time}
         <div className={style.relogioWrapper}>
            <Clock time={time} />
         </div>
         <Button onClick={() => regressTime(time)}>
            Começar!
         </Button>
      </div>
   )
}
