
import './App.css';
import React from 'react';

class App extends React.Component {
  state = {
    name: "circle"
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
        name: "circle start-rotate slower1-rotate slower2-rotate slower3-rotate stop-rotate"
      });
    }, Math.floor(Math.random() * 7000) + 7000);
  }
  render() {
    return (
      <div>
        <div className="arrow"></div>
        <ul className={this.state.name}>
          <li>
            <div className="text"
            contenteditable="true"
            spellcheck="false">
              Kock
            </div>
          </li>
          <li>
            <div className="text"
            contenteditable="true"
            spellcheck="false">
              Kanape
            </div>
          </li>
          <li>
            <div className="text"
            contenteditable="true"
            spellcheck="false">
              Drink
            </div>
          </li>
          <li>
            <div className="text"
            contenteditable="true"
            spellcheck="false">
              10% rabatt
            </div>
          </li>
          <li>
            <div className="text"
            contenteditable="true"
            spellcheck="false">
              Kaffe
            </div>
          </li>
          <li>
            <div className="text"
            contenteditable="true"
            spellcheck="false">
              Godis
            </div>
          </li>
        </ul>
        <button className="spin-button"
        onClick={this.startRotate}>Spin</button>
      </div>
    );
  }
}
export default App;
