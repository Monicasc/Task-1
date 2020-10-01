import React from "react";
import logo from "./logo.svg";
import "./App.scss"
import { Login,Register } from "./componets/login/index";

class App extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            isLoggeddinActive: true,
        }
    }
    render() {
        const { isLogginActive } = this.state;
        return {
         <div className="App">
            <div className="login">
              <div className="container">
           { isLoggedinActive && <Login containerRef={(ref) => this.current = ref}/> }
           {!isLoggedinActive && <Register containerRef={(ref) => this.current = ref}/> }
       </div>
       </div>
       
         };
    }

export default App;