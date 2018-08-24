import React, { Component } from 'react';
import './Card.css';
import ReactCardFlip from 'react-card-flip';
import VoiceButton from '../VoiceButton/VoiceButton';
class StudyCard extends Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false,
      voiceButtonIsClick: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    console.log(e);
    e.preventDefault();
    this.setState({ isFlipped: !this.state.isFlipped });
  }

  render() {
    return (
      <div className="card-container">
        <ReactCardFlip isFlipped={this.state.isFlipped}>
          <div
            key="front"
            onDoubleClick={this.handleClick}
            className="card text-center"
          >
            <VoiceButton toRead={this.props.hanzi} className="voice-btn" />
            <p className="hanzi text-center">{this.props.hanzi}</p>
            <p className="pinyin text-center">{this.props.pinyin}</p>
          </div>

          <div
            key="back"
            className="card"
            onDoubleClick={this.handleClick}
            onTouchEnd={this.handleClick}
          >
            <p className="def">{this.props.def}</p>
          </div>
        </ReactCardFlip>
      </div>
    );
  }
  // <div>
  //   <CardFlippable
  //     title={props.hanzi}
  //     description={props.pinyin}
  //     backContent={props.def}
  //   />
  // </div>

  // <div className="card-container">
  //   <div className="card">
  //     <div className="front">
  //       <div className="def">
  //         <p>{props.def}</p>
  //       </div>
  //     </div>
  //     <div className="back">
  //       <div className="hanzi">
  //         <p>{props.hanzi} </p>
  //       </div>
  //       <div className="pinyin">
  //         <p>{props.pinyin} </p>
  //       </div>
  //     </div>
  //   </div>
  // </div>
}

export default StudyCard;
