import { Component } from "react";
import "./App.css";



const App = () => {
  return (
    <div className = "app-wrapper">
      <header className="header">
        <img src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-marilyn-scott-0.png"/>
      </header>
      <nav className="nav">
        <div><a href="https://github.com/Ch1ChaGL">Profile</a></div>
        <div><a href="https://github.com/Ch1ChaGL">Profile</a></div>
        <div><a href="https://github.com/Ch1ChaGL">Messages</a></div>
        <div><a href="https://github.com/Ch1ChaGL">News</a></div>
        <div><a href="https://github.com/Ch1ChaGL">Music</a></div>
        <div><a href="https://github.com/Ch1ChaGL">Settings</a></div>

      </nav>
      <div className="content">
        <div>
          <img className="billboard" src="https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg"></img>
        </div>
        <div>
           ava + description
        </div>
        <div>
            my posts
            <div>
              new post
            </div>
            <div>
              <div>Post 1</div>
              <div>Post 2</div>
            </div>
        </div>
      </div>
    </div>
  );
};




export default App;
