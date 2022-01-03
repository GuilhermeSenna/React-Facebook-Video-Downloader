import logo from './logo.svg';
import styles from './App.module.css';
import Card from './components/UI/Card';
import Form from './components/Downloader/Form';

const App = () => {
  return (
   <>
    <h1 className={styles.title}>Facebook Downloader</h1>
    <Card >
      <Form />
    </Card>
   </>
  );
}

export default App;
