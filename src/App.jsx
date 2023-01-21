import styles from './App.module.css'
import MainPage from './pages/MainPage';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        <MainPage styles={styles}/>
        
      </div>
    </div>
  );
}

export default App;
