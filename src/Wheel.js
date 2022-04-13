
import './Wheel.css';
import React from 'react';
import Winning from './Winning.js';

export default class Wheel extends React.Component {
  state = {
    name: "circle",
    finished: false,
    length: Math.floor(Math.random() * 7000)
  }
    
  startRotate = () => {
    this.setState({
      name: "circle start-rotate"
    });
    setTimeout(() => {
      this.setState({
        name: "circle start-rotate slower1-rotate"
      });
    }, 2000);
    setTimeout(() => {
      this.setState({
        name: "circle start-rotate slower1-rotate slower2-rotate"
      });
    }, 4000);
    setTimeout(() => {
      this.setState({
        name: "circle start-rotate slower1-rotate slower2-rotate slower3-rotate"
      });
    }, 7000);
    setTimeout(() => {
      this.setState({
        name: "circle start-rotate slower1-rotate slower2-rotate slower3-rotate stop-rotate",
        finished: true
      });
    }, 
    this.state.length + 7000
    );
  }
  render() {
    if (this.state.finished === false) {
      console.log(this.state.length)
      console.log(String(Math.floor(360*(this.state.length/7000)/30)))
      return (
        <div>
          <div className="arrow"></div>
          <ul className={this.state.name}>
          <li>
            <div className="text"
            contenteditable="true"
            spellcheck="false">
              <span className="iconify" data-icon="mdi:chef-hat" style={{fontSize: '8vw', color: "white"}}></span><br/>Kocken  
            </div>
          </li>
          <li>
            <div className="text"
            contenteditable="true"
            spellcheck="false">
              <span className="iconify" data-icon="carbon:restaurant-fine" style={{fontSize: '8vw', color: "white"}}></span><br/>Sjö&Land  
            </div>
          </li>
          <li>
            <div className="text"
            contenteditable="true"
            spellcheck="false">
              <span className="iconify" data-icon="ic:baseline-outdoor-grill" style={{fontSize: '8vw', color: "white"}}></span><br/>Grillbuffé  
            </div>
          </li>
          <li>
            <div className="text"
            contenteditable="true"
            spellcheck="false">
              <span className="iconify" data-icon="mdi:chef-hat" style={{fontSize: '8vw', color: "white"}}></span><br/>Kocken  
            </div>
          </li>
          <li>
            <div className="text"
            contenteditable="true"
            spellcheck="false">
              <span className="iconify" data-icon="carbon:restaurant-fine" style={{fontSize: '8vw', color: "white"}}></span><br/>Sjö&Land  
            </div>
          </li>
          <li>
            <div className="text"
            contenteditable="true"
            spellcheck="false">
              <span className="iconify" data-icon="ic:baseline-outdoor-grill" style={{fontSize: '8vw', color: "white"}}></span><br/>Grillbuffé  
            </div>
          </li>
          </ul>
          <button className="spin-button"
          onClick={this.startRotate}>Spin</button>
        </div>
      );
      }
    else {
      return (
        <div>
          <div className="arrow"></div>
          <ul className={this.state.name}>
          <li>
            <div className="text"
            contenteditable="true"
            spellcheck="false">
              <span className="iconify" data-icon="mdi:chef-hat" style={{fontSize: '8vw', color: "white"}}></span> <br/>Kocken 
            </div>
          </li>
          <li>
            <div className="text"
            contenteditable="true"
            spellcheck="false">
              <span className="iconify" data-icon="carbon:restaurant-fine" style={{fontSize: '8vw', color: "white"}}></span> <br/>Sjö&Land 
            </div>
          </li>
          <li>
            <div className="text"
            contenteditable="true"
            spellcheck="false">
              <span className="iconify" data-icon="ic:baseline-outdoor-grill" style={{fontSize: '8vw', color: "white"}}></span> <br/>Grillbuffé 
            </div>
          </li>
          <li>
            <div className="text"
            contenteditable="true"
            spellcheck="false">
              <span className="iconify" data-icon="mdi:chef-hat" style={{fontSize: '8vw', color: "white"}}></span> <br/>Kocken 
            </div>
          </li>
          <li>
            <div className="text"
            contenteditable="true"
            spellcheck="false">
              <span className="iconify" data-icon="carbon:restaurant-fine" style={{fontSize: '8vw', color: "white"}}></span> <br/>Sjö&Land 
            </div>
          </li>
          <li>
            <div className="text"
            contenteditable="true"
            spellcheck="false">
              <span className="iconify" data-icon="ic:baseline-outdoor-grill" style={{fontSize: '8vw', color: "white"}}></span> <br/>Grillbuffé 
            </div>
          </li>
          </ul>
          <Winning win = {String(Math.floor(360*(this.state.length/7000)/30))} values = {this.props.submitValues}/>
        </div>
      );
      }
  }
}
