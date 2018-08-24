import React, { Component } from 'react';
// import TextToSpeech from '../TextToSpeech';
// import { Button } from 'reactstrap';

import './DrawButton.css';

class DrawButton extends Component {
  constructor(props) {
    super(props);

    this.drawCard = this.drawCard.bind(this);
  }

  drawCard() {
    this.props.drawCard();
  }
  // handleClick() {
  //   this.drawCard();
  // }
  render(props) {
    return (
      <div className="buttonContainer draw-button">
        <button className="btn" onClick={this.drawCard}>
          Draw Card
        </button>
      </div>
    );
  }
}

export default DrawButton;
