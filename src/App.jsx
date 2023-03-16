import React, { useEffect } from 'react';
import Loading from './components/Loading';
import IndexRouter from './route';
import { useLoading } from './utils/LoadingManager';

const App = () => {
  const { handleLoadingTimer } = useLoading();
  useEffect(() => {
    handleLoadingTimer(1000);
  }, []);

  return (
    <>
      <Loading />
      <IndexRouter />
    </>
  );
};

export default App;
