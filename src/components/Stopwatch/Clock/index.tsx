import style from './styles.module.scss';

interface Props {
  time?: number
}

export default function Clock({ time = 0 }: Props) {

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minute0, minute1] = String(minutes).padStart(2, '0');
  const [second0, second1] = String(seconds).padStart(2, '0');

  return (
    <>
      <span className={style.relogioNumero}>{minute0}</span>
      <span className={style.relogioNumero}>{minute1}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{second0}</span>
      <span className={style.relogioNumero}>{second1}</span>
    </>
  )
}