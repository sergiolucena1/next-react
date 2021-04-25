import format from 'date-fns/format'; // yarn date-fns biblioteca de datas
import ptBR from 'date-fns/locale/pt-BR'; // importando indiom brasileiro 

import styles from './styles.module.scss';

export default function Header(){
  const currentDate = format(new Date(), 'EEEEEE, d MMMM ',{ // formatando a data atual
    locale: ptBR,
  }); // formatacao da data currentDate = data corrente , local brasil = ptBR

  return (
    <header className={styles.headerContainer}>
      <img src="/logo.svg" alt="podcaster"></img>

      <p>O melhor para você ouvir, sempre </p>

      <span>{currentDate}</span> 
    </header>
  );
}