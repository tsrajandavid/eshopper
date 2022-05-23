import React, { useEffect } from 'react';
import './App.scss';
import AppRouter from './components/routing'
function App(props: any) {
  // useEffect(() => {
  //   console.log(props.state)
  // }, [props.state])

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App
