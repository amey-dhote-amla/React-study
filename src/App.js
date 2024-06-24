import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet.js'
import Welcome from './components/Welcome.js'
import Hello from './components/Hello.js'
import Message from './components/Message.js';
import Counter from './components/Counter.js';
import FunctionClick from './components/FunctionClick.js';
import ClassClick from './components/ClassClick.js';

function App() {
  return (
    <div className="App">

      {/* <Message/> */}

      {/* <Greet name="Bruce" heroName="Batman">
        <p>This is children props</p>
      </Greet>
      <Greet name="Jhon" heroName="Superman">
        <button>Action</button>
      </Greet>  
      <Greet name="Tim" heroName="Spiderman" />
      */}


      {/*
      <Welcome name="Bruce" heroName="Batman" />
      <Welcome name="Jhon" heroName="Superman"/> 
      <Welcome name="Tim" heroName="Spiderman"/> 
      <Hello/> 
     */}

     {/* <Counter /> */}

     <FunctionClick/> 
     <ClassClick/>

    </div>
  );
}

export default App;
