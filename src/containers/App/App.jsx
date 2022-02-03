import styles from './App.module.css';
import cn from 'classnames';


const App = () => {
  return (
    <h1 className={cn(styles.header, styles.text)}>Hello</h1>
  )
}

export default App;
