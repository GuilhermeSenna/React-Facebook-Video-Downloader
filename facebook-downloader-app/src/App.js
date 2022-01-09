import logo from './logo.svg';
import React, { useEffect, useState, useContext } from "react";
import styles from './App.module.css';
import Card from './components/UI/Card';
import Form from './components/Downloader/Form';
import { ProgressBar } from './components/UI/ProgressBar.css';
import LinkContext from './store/link-context';

let interval = undefined;

const App = () => {


  const ctx = useContext(LinkContext)

  useEffect(() => {
    if (ctx.isTyping) {
      setProgress(0)
      setRunning(true);
      ctx.onStopTyping();
    }
  }, [ctx.isTyping])

  const [running, setRunning] = useState(false);
  const [progress, setProgress] = useState(0);



  useEffect(() => {
    if (running) {
      interval = setInterval(() => {
        setProgress((prev) => prev + 1);
      }, 20);
    } else {
      clearInterval(interval);
    }
  }, [running]);

  useEffect(() => {
    if (progress === 100) {
      // Search for video

      setRunning(false);
      clearInterval(interval);
    }
  }, [progress]);


  return (
    <>
      <h1 className={styles.title}>Facebook Video Downloader</h1>

      <h3 className={styles.subtitle}>The 'Facebook Video Downloader' is a simple React App, created to download facebook videos from their links.</h3>
      <Card >
        <Form />
        {/* <p>Está rodando - {running.toString()}</p>
        <p>Progress - {progress}</p> */}

        {running ?
          <>
            <span className={styles.blink_me}>Waiting until stop typing</span>
            <ProgressBar progress={progress} />
          </>
          : ''}

        {/* <button
          onClick={() => {
            setRunning(false);
            setProgress(0);
          }}
        >
          Clear
        </button>
        <button onClick={() => setRunning(!running)}>
          {running ? "Stop" : "Start"}
        </button> */}

      </Card>
    </>
  );
}

export default App;
