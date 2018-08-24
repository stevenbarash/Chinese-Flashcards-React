import React, { Component } from 'react';
import './Profile.css';
import CanvasJS from './canvasjs.min.js';

import TopNavBar from './TopNavBar';
// import CanvasJS from 'canvasjs';
import { Card } from 'reactstrap';

export default class Profile extends Component {
  componentDidMount() {
    var chart = new CanvasJS.Chart('chartContainer', {
      animationEnabled: true,
      exportEnabled: true,

      data: [
        {
          type: 'column',
          dataPoints: [
            { y: 71, label: '你好' },
            { y: 55, label: '再见' },
            { y: 50, label: '上' },
            { y: 65, label: '苹果' },
            { y: 95, label: '北' },
            { y: 68, label: '日' },
            { y: 28, label: '不' },
            { y: 34, label: '早' },
            { y: 14, label: '晚' }
          ]
        }
      ]
    });
    chart.render();
  }
  render() {
    return (
      <div>
        <TopNavBar />
        <div className="text-center">
          <img
            className="profilePic rounded-circle"
            src="https://pitt.edu/~snb65/1052/Final/FINAL/img/profilepic.jpg"
          />
          <h1 className=" ">Steven Barash</h1>
          <p>Student</p>
          <hr />
          <h3>HSK Level</h3>
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-secondary active">
              HSK1
            </button>
            <button type="button" className="btn btn-secondary ">
              HSK2
            </button>
            <button type="button" className="btn btn-secondary ">
              HSK3
            </button>
            <button type="button" className="btn btn-secondary ">
              HSK4
            </button>
            <button type="button" className="btn btn-secondary ">
              HSK5
            </button>
          </div>
          <br />
          <br />

          <h2>Words commonly missed:</h2>
          <div id="chartContainer" />
        </div>
      </div>
    );
  }
}
