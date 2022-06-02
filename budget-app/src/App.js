import './App.css';
import Header from "./components/header"
import Input from "./components/input"
import Doughnuts from "./components/doughnuts"
import Savings from "./components/savings"
import { useState } from 'react'



function App() {

    
  const [data, setData] = useState({})
    

  return (
    <div className="App">
      <Header />
      <Input setData={setData}/>
      <Doughnuts data={data}/>
      <Savings data={data}/>
    </div>
  );
}

export default App;
