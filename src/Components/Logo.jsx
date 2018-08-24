import React, { Component } from 'react';

export default class Logo extends Component {
  render() {
    return (
      <div>
        <svg
          width={100}
          height={35}
          viewBox="0 0 455 193"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className="container-fluid"
        >
          <desc>Created with Sketch.</desc>
          <defs />
          <g
            id="Page-1"
            stroke="none"
            strokeWidth={1}
            fill="none"
            fillrule="evenodd"
          >
            <g id="Desktop-HD" transform="translate(-763.000000, -426.000000)">
              <g id="Group" transform="translate(763.000000, 426.000000)">
                <rect
                  id="Rectangle"
                  stroke="#404040"
                  strokeWidth={2}
                  x={1}
                  y={1}
                  width={453}
                  height={191}
                />
                <text
                  id="HanU"
                  fontFamily="NotoSansCJKsc-Thin, Noto Sans CJK SC"
                  fontSize={100}
                  fontStyle="condensed"
                  fontWeight={300}
                  line-spacing={120}
                  fill="#404040"
                >
                  <tspan x={102} y={138}>
                    HanU
                  </tspan>
                </text>
              </g>
            </g>
          </g>
        </svg>
      </div>
    );
  }
}
