import logo from './logo.svg';
import React, { useEffect, useState, useContext } from "react";
import styles from './App.module.css';
import Card from './components/UI/Card';
import Form from './components/Downloader/Form';
import { ProgressBar } from './components/UI/ProgressBar.css';
import LinkContext from './store/link-context';
import Footer from './components/UI/Footer';
import Result from './components/Downloader/Result';

let interval = undefined;

const App = () => {


  const ctx = useContext(LinkContext)

  const [running, setRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [display, setDisplay] = useState('none');
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    if (ctx.isTyping && ctx.link.trim().length > 0) {
      setProgress(0)
      setRunning(true);
      ctx.onStopTyping();
    } else if (ctx.link.trim().length === 0) {
      setProgress(0)
      setRunning(false);
    }
  }, [ctx, ctx.isTyping])

  useEffect(() => {
    if (running) {
      interval = setInterval(() => {
        setProgress((prev) => prev + 1);
      }, 25);
    } else {
      clearInterval(interval);
    }
  }, [running]);

  useEffect(() => {
    if (progress === 100) {
      // Search for video

      setDisplay('block');

      setTimeout(() =>
        setOpacity(1), 100
      )

      console.log(ctx.link);

      setRunning(false);
      clearInterval(interval);
    }
  }, [progress]);


  return (
    <>
      <h1 className={styles.title}>Facebook Video Downloader</h1>

      <h3 className={styles.subtitle}>The 'Facebook Video Downloader' is a simple React App, created to download facebook videos from their links.</h3>
      <Card >
        <h3 className={styles.label}>Facebook video URL</h3>
        <Form />

        {running ?
          <>
            <span className={styles.blink_me}>Waiting until stop typing</span>
            <ProgressBar progress={progress} />
          </>
          : ''}
      </Card>
      <Card style={{
        display: display,
        transition: 'opacity 1s ease',
        opacity: opacity,
      }}>
        <Result />
        {/* <h1>teste</h1> */}
      </Card>
      <Footer />
    </>
  );
}

export default App;
