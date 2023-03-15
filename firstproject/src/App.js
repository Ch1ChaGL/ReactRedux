//import logo from "./logo.svg";
import { Component } from "react";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header/>
      <Tehologies/>
    </div>
  );
};


const Header = ()=>{
  return(
    <div>
      <a href="https://github.com/Ch1ChaGL">Home</a>
      <a href="https://github.com/Ch1ChaGL">News Feed</a>
      <a href="https://github.com/Ch1ChaGL">Message</a>
    </div>
  )
}

const Tehologies = ()=>{
  return(<div className="App">
  <ul>
    <li>123</li>
    <li>123</li>
    <li>123</li>
  </ul>
</div>)
}


export default App;
