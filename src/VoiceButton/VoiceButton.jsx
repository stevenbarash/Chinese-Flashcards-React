import React, { Component } from 'react';
import '../Card/Card.css';
export default class VoiceButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // this.setState({ toRead: this.props.toRead });
  handleClick() {
    console.log('it works ' + this.props.toRead);
    var word = new SpeechSynthesisUtterance(this.props.toRead);
    word.lang = 'zh-TW';
    word.rate = 1.0;
    window.speechSynthesis.speak(word);
  }

  render() {
    return (
      <div>
        <div className="buttonContainer">
          <button className="btn voice-btn" onClick={this.handleClick}>
            <i className="fas fa-volume-up" />
          </button>
        </div>
      </div>
    );
  }
}
