import { useEffect } from 'react';
import './App.css'
import Main from './components/main/Main';

const telegram = window.Telegram.WebApp;
 
const App = () => {
  useEffect(()=>{
    telegram.ready()
  })
  return (
    <div className="App bg-black h-[100vh]">
      <Main />
    </div>
  );
}

export default App
