import React, { useState } from 'react';
import TopLoadingBar from 'react-top-loading-bar';

const PageLoadingBar = () => {
  const [progress, setProgress] = useState(5);

  const onLoaderFinished = () => {
    const intervalId = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress >= 100) {
          clearInterval(intervalId);
          return 100;
        } else {
          return prevProgress + 10;
        }
      });
    }, 200);
  };

  onLoaderFinished();
  return (
    <>
      <TopLoadingBar progress={progress} onLoaderFinished={onLoaderFinished} color="#1D9BF0" />
    </>
  );
};

export default PageLoadingBar;