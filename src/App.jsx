// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <p>Hii</p>
//     </>
//   )
// }

// export default App
// App.js
import React from 'react';
import CelebrityList from './components/CelebrityList';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Factwise Assesment</h1>
      <CelebrityList />
    </div>
  );
};

export default App;
