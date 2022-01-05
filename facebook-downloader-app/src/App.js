import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import styles from './App.module.css';
import Card from './components/UI/Card';
import Form from './components/Downloader/Form';
import { ProgressBar } from './components/UI/ProgressBar.css';

let interval = undefined;

const App = () => {
  const [running, setRunning] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (running) {
      interval = setInterval(() => {
        setProgress((prev) => prev + 1);
      }, 10);
    } else {
      clearInterval(interval);
    }
  }, [running]);

  useEffect(() => {
    if (progress === 100) {
      setRunning(false);
      clearInterval(interval);
    }
  }, [progress]);


  return (
   <>
    <h1 className={styles.title}>Facebook Downloader</h1>
    <Card >
      <Form />
      <p>Está rodando - {running.toString()}</p>
      <p>Progress - {progress}</p>
      <ProgressBar progress={progress}/>

      <button
        onClick={() => {
          setRunning(false);
          setProgress(0);
        }}
      >
        Clear
      </button>
      <button onClick={() => setRunning(!running)}>
        {running ? "Stop" : "Start"}
      </button>
    </Card>
   </>
  );
}

export default App;
